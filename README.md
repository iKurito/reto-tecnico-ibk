# User Management System

<!-- ![User Management System Logo](logo.png) -->

## Descripción del Proyecto

El **User Management System** es un sistema CRUD para el mantenimiento de usuarios. Permite realizar operaciones básicas de crear, leer, actualizar y eliminar usuarios, y genera una constancia después de cada operación realizada. La constancia incluye la información de la operación y cuenta con un botón de descarga para guardarla como imagen.

## Instalación y Configuración

Para instalar y ejecutar el sistema, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

```bash
cd reto-tecnico-ibk
```

2. Ejecutar el comando para construir las respectivas imágenes de Docker:

```bash
docker compose build
```

3. Ejecutar el comando para levantar los contenedores:

```bash
docker compose up -d
```

El servidor estará disponible en `http://localhost`.

Para terminar la ejecución de los contenedores, ejecutar el siguiente comando:

```bash
docker compose down
```

## Microfrontend con Stencil y Angular

El frontend está desarrollado con Stencil para los componentes web y Angular (versión 14) para integrar funcionalidades adicionales. A continuación se detallan los aspectos clave del Microfrontend:

### Componentes Web con Stencil

Los componentes web se encuentran en la carpeta <a href="https://github.com/iKurito/reto-tecnico-ibk/tree/main/prueba-tecnica-frontend/packages/stencil-library" target="_blank" >`/prueba-tecnica-frontend/packages/stencil-library`</a>.

Puedes ver y probar cada componente utilizando Storybook:

```bash
npm run storybook
```

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

El cliente del Microfrontend utiliza iFrame para visualizarlo. Puedes acceder al Sandbox de 3 formas:

1. Acceder a `/microfrontend-cliente` y ejecutar los siguientes comandos:

Para instalar las dependencias:
```bash
yarn
```

Para ejecutar el cliente en modo desarrollo:
```bash
yarn dev
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
