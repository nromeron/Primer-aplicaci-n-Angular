import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: Auth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.authService, email, password)
      .then(datos => resolve(datos))
      .catch(error => reject(error));
    });
  }

  // Obtenemos el usuario logueado
  getAuthState(): Observable<any>{
    return authState(this.authService);
  }

  logout(){
    this.authService.signOut();
  }

}
