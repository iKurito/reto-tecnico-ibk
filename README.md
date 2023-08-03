# User Management System

<!-- ![User Management System Logo](logo.png) -->

## Descripción del Proyecto

El **User Management System** es un sistema CRUD para el mantenimiento de usuarios. Permite realizar operaciones básicas de crear, leer, actualizar y eliminar usuarios, y genera una constancia después de cada operación realizada. La constancia incluye la información de la operación y cuenta con un botón de descarga para guardarla como imagen.

## Instalación y Configuración

Para instalar y ejecutar el sistema, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/awesome-user-management.git
```
```bash
cd awesome-user-management
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor local:

```bash
npm start
```

El servidor estará disponible en `http://localhost`.

## Microfrontend con Stencil y Angular

El frontend está desarrollado con Stencil para los componentes web y Angular (versión 14) para integrar funcionalidades adicionales. A continuación se detallan los aspectos clave del Microfrontend:

### Componentes Web con Stencil

Los componentes web se encuentran en la carpeta `/microfrontend/src/components`. Puedes ver y probar cada componente utilizando Storybook:

```bash
npm run storybook
```

Storybook estará disponible en `http://localhost:6006`.

### Manejo de Estados

Para un manejo eficiente de estados, se utiliza la librería Redux. Todos los estados relevantes se almacenan en el store global, lo que permite una comunicación eficiente entre componentes.

### Estilización con SASS

La estilización de los componentes se realiza utilizando SASS para proporcionar un diseño moderno y atractivo.

### Información del Commit y Fecha de Compilación

La información del último commit y la fecha de compilación se muestran en el navegador utilizando variables de entorno. Esto permite rastrear la versión en ejecución fácilmente.

## Documentación de la API Rest

La API Rest para el mantenimiento de usuarios se encuentra documentada en el archivo `openapi.json`, que sigue el estándar OpenAPI (Swagger). Puedes acceder a la documentación en `http://localhost:3000/api-docs`.

## Mocks de Datos

Los datos se generan automáticamente con Faker.js y se utilizan mocks para simular las respuestas de la API en el entorno de desarrollo.

## Despliegue en Contenedor Docker

Para desplegar la aplicación en un contenedor Docker con Nginx, sigue estos pasos:

1. Construye la imagen Docker:

```bash
docker build -t awesome-user-management .
```

2. Ejecuta el contenedor:

```bash
docker run -d -p 80:80 awesome-user-management
```

La aplicación estará disponible en `http://localhost`.

## Cliente del Microfrontend (Sandbox)

El cliente del Microfrontend utiliza iFrame para visualizarlo. Puedes acceder al Sandbox de 3 formas:

1. Ejecutando el cliente localmente:

```bash
npm run start:sandbox
```

2. Ejecutando el cliente en un contenedor Docker:

```bash
docker run -d -p 80:80 awesome-user-management-sandbox
```

3. Accediendo al Sandbox en línea: `https://codesandbox.io/s/strange-poitras-x42w3k?file=/index.html` o `https://x42w3k.csb.app/`.

## Contribución

¡Agradecemos las contribuciones! Si deseas contribuir a Awesome User Management System, sigue los pasos descritos en `CONTRIBUTING.md`.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto y Soporte

Si tienes alguna pregunta o necesitas soporte técnico, puedes contactarnos en `ronaldo.tunque@pucp.edu.pe`.

¡Esperamos que disfrutes usando User Management System!

Happy coding! 🚀
