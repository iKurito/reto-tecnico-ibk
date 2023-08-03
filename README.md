# User Management System

<!-- ![User Management System Logo](logo.png) -->

## Descripción del Proyecto

El **User Management System** es un sistema CRUD para el mantenimiento de usuarios. Permite realizar operaciones básicas de crear, leer, actualizar y eliminar usuarios, y genera una constancia después de cada operación realizada. La constancia incluye la información de la operación y cuenta con un botón de descarga para guardarla como imagen.

## Requisitos Mínimos

Para poder correr este proyecto en tu máquina local, asegúrate de tener instalado lo siguiente:

- Node.js (versión 16 o superior): Puedes descargar Node.js desde su sitio web oficial: https://nodejs.org/

- Docker: Docker es necesario para el despliegue del proyecto en contenedores. Puedes descargar Docker desde su sitio web oficial: https://www.docker.com/get-started

- Angular (versión 14): Angular es necesario para integrar funcionalidades adicionales en el frontend. Puedes instalar Angular globalmente usando el siguiente comando:

  ```bash
  npm install -g @angular/cli@14
  ```

- StencilJS: StencilJS es utilizado para desarrollar los componentes web del Microfrontend. Puedes instalar StencilJS globalmente con el siguiente comando:

  ```
  npm install -g @stencil/core
  ```

## Instalación y Configuración

Para instalar y ejecutar el sistema, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

```bash
cd reto-tecnico-ibk
```

2. Dirígete a la carpeta `prueba-tecnica-backend` y ejecuta los siguientes comandos:

- Para instalar las dependencias del proyecto:

  ```bash
  yarn
  ```

- Para configurar las variables de entorno, crea un archivo `.env` en la raíz del proyecto y copia el contenido del archivo `.env.etemplate` en él. Luego, reemplaza los valores de las variables de entorno con los valores correspondientes.

- Desplegar la base de datos MongoDB en un contenedor Docker:

  ```bash
  docker-compose up -d
  ```

- Para ejecutar el servidor:

  ```bash
  yarn dev
  ```

  El servidor estará disponible en `http://localhost:8080`.

3. Dirígete a la carpeta `prueba-tecnica-frontend` y ejecuta los siguientes comandos:

- Para instalar las dependencias del proyecto que permiten la comunicación entre stencil-library y angular-workspace:

  ```bash
  npm install
  ```

4. Dirígete a la carpeta `prueba-tecnica-frontend/packages/stencil-library` y ejecuta los siguientes comandos:

- Para instalar las dependencias del proyecto:

  ```bash
  npm install
  ```

- Para compilar los componentes web:

  ```bash
  npm run build
  ```

5. Dirígete a la carpeta `prueba-tecnica-frontend/packages/angular-workspace` y ejecuta los siguientes comandos:

- Para instalar las dependencias del proyecto:

  ```bash
  npm install
  ```

- Para configurar las variables de entorno, usted puede dirigirse al archivo `environment.ts` y reemplazar los valores de las variables de entorno con los valores correspondientes.

- Para compilar los componentes web elaborados con Stencil:

  ```bash
  ng build component-library
  ```

- Para ejecutar la aplicación:

  ```bash
  npm start
  ```

  La aplicación estará disponible en `http://localhost:4200`.

## Microfrontend con Stencil y Angular

El frontend está desarrollado con Stencil para los componentes web y Angular (versión 14) para integrar funcionalidades adicionales. A continuación se detallan los aspectos clave del Microfrontend:

### Componentes Web con Stencil

Los componentes web se encuentran en la carpeta <a href="https://github.com/iKurito/reto-tecnico-ibk/tree/main/prueba-tecnica-frontend/packages/stencil-library" target="_blank" >`/prueba-tecnica-frontend/packages/stencil-library`</a>.

```bash
npm run storybook
```

Puedes ver y probar cada componente utilizando Storybook:

```bash
npx stencil build --watch
```

Para compilar los componentes en tiempo real mientras realizas cambios, utiliza:

Storybook estará disponible en `http://localhost:6006`.

### Manejo de Estados

Para un manejo de estados, en esta oportunida se está utilizando el LocalStorage. Todos los estados relevantes se almacenan en el navegador, lo que permite una comunicación entre diferentes componentes en una arquitectura microfrontend.

### Estilización con SASS

La estilización de los componentes se realiza utilizando SASS para proporcionar un diseño moderno y atractivo.

### Información del Commit y Fecha de Compilación

La información de los commit realizados y la fecha de compilación se muestran en el navegador dependiendo de una variable de entorno. Esto permite rastrear la versión en ejecución fácilmente en caso se precise.

## Documentación de la API Rest

La API Rest para el mantenimiento de usuarios se encuentra documentada en el archivo `openApiDocumentation.json.json`, ubicada en <a href="https://github.com/iKurito/reto-tecnico-ibk/tree/main/prueba-tecnica-backend/docs">`/prueba-tecnica-backend/docs`</a>, que sigue el estándar OpenAPI (Swagger).

Puedes acceder a la documentación en `http://localhost:8080/api/v1/docs`.

## Testing

Para las pruebas unitarias y de integración, se utilizan las librerías Jest y Supertest. Además, para evitar la conexión directa a MongoDB, se emplea mongodb-memory-server para configurar una base de datos en memoria.

Los mocks de datos se generan manualmente en los archivos de prueba, lo que permite tener control total sobre los datos de prueba y garantiza que las pruebas sean más predecibles y mantenibles.

Para ejecutar las pruebas, utiliza el siguiente comando:

```
yarn test
```

## Despliegue en Contenedor Docker

Para desplegar la aplicación en un contenedor Docker con Nginx, sigue estos pasos:

1. Dirigete a la raíz y ejecuta el siguiente comando para construir las imágenes Docker para la base de datos, el backend y el frontend utilizando docker compose:

```bash
docker compose build
```

2. Ejecutar el comando para levantar los contenedores:

```bash
docker compose up -d
```

La aplicación estará disponible en `http://localhost`.

Para terminar la ejecución de los contenedores, ejecutar el siguiente comando:

```bash
docker compose down
```

## Cliente del Microfrontend (Sandbox)

El cliente del Microfrontend utiliza iFrame para visualizar el User Management System. Puedes acceder al Sandbox de 3 formas:

1. Acceder a `/microfrontend-cliente` y ejecutar los siguientes comandos:

- Para instalar las dependencias:

  ```bash
  yarn
  ```

- Para ejecutar el cliente en modo desarrollo:

  ```bash
  yarn dev
  ```

  La aplicación estará disponible en `http://localhost:5173`.

2. Accediendo al Sandbox en línea: <a href="https://codesandbox.io/s/strange-poitras-x42w3k?file=/index.html">`https://codesandbox.io/s/strange-poitras-x42w3k?file=/index.html`</a> o <a href="https://x42w3k.csb.app/">`https://x42w3k.csb.app/`</a>.

## Contribución

¡Agradecemos las contribuciones! Si deseas contribuir a User Management System, sigue los pasos descritos en <a href="https://github.com/iKurito/reto-tecnico-ibk/blob/main/CONTRIBUTING.md" target="_blank">`CONTRIBUTING.md`</a>.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo <a href="https://github.com/iKurito/reto-tecnico-ibk/blob/main/LICENSE" target="_blank">`LICENSE`</a> para más detalles.

## Contacto y Soporte

Si tienes alguna pregunta o necesitas soporte técnico, puedes contactarnos en <a href="mailto:ronaldo.tunque@pucp.edu.pe">`ronaldo.tunque@pucp.edu.pe`</a>.

¡Esperamos que disfrutes usando User Management System!

Happy coding! 🚀
