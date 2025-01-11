# ControlClientes

Este proyecto es una aplicación de gestión de clientes construida con Angular. Permite a los usuarios gestionar una lista de clientes, incluyendo la adición, edición y eliminación de información de clientes. La aplicación se integra con Firebase para la autenticación y el almacenamiento de datos.

## Características

- **Gestión de Clientes**: Añadir, editar y eliminar clientes.
- **Autenticación**: Funcionalidad de inicio y cierre de sesión segura utilizando Firebase Authentication.
- **Datos en Tiempo Real**: Actualizaciones en tiempo real de los datos de los clientes utilizando Firebase Firestore.
- **Diseño Responsivo**: Interfaz amigable que funciona en varios dispositivos.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **app.component.ts**: Este es el componente principal de la aplicación. Define el selector `app-root`, que es el punto de entrada de la aplicación. Importa otros componentes como `RouterOutlet`, `CabeceroComponent` y `PiePaginaComponent`. El archivo de plantilla asociado (`app.component.html`) y el archivo de estilos (`app.component.css`) definen la estructura y el estilo de la aplicación.

- **CabeceroComponent**: Este componente representa el encabezado de la aplicación. Puede incluir elementos como el nombre de la aplicación, enlaces de navegación, etc.

- **PiePaginaComponent**: Este componente representa el pie de página de la aplicación. Puede incluir información de contacto, enlaces a políticas de privacidad, etc.

## Servidor de Desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de Código

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas de Extremo a Extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de tu elección. Para usar este comando, primero necesitas añadir un paquete que implemente capacidades de pruebas de extremo a extremo.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o consulta la [página de referencia y comandos de Angular CLI](https://angular.dev/tools/cli).
