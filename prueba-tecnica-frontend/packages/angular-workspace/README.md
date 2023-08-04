# User Management System con Angular

Este proyecto ha sido generado con Angular CLI versión 14.2.12.

## Tabla de contenidos

- [Descripción](#descripción)
- [Requisitos Previos](#requisitos-previos)
- [Ejecución](#ejecución)
- [Generación de Componentes de Stencil Library](#generación-de-componentes-de-stencil-library)
- [Compilación](#compilación)
- [Obtener ayuda adicional](#obtener-ayuda-adicional)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

Este es un proyecto de Angular que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) para el mantenimiento de usuarios. La aplicación utiliza componentes generados con Stencil Library, los cuales son construidos y traídos al proyecto mediante el comando `ng build component-library`.

## Requisitos Previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- Node.js (versión 16.17)
- npm (versión 8.15.0 o superior)
- Angular CLI (versión 14.2.12)

Puedes verificar si tienes Node.js y npm instalados ejecutando los siguientes comandos en tu terminal:

```bash
node --version
npm --version
```

Para instalar Angular CLI, ejecuta el siguiente comando:

```bash
npm install -g @angular/cli@14.2.12
```

## Instalación

Para obtener el proyecto y sus dependencias, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

2. Navega hasta el directorio del proyecto:

```bash
cd reto-tecnico-ibk/prueba-tecnica-frontend/packages/angular-workspace
```

3. Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

## Ejecución

Antes de iniciar el servidor de desarrollo y visualizar la aplicación, asegúrate haber construido los componentes de Stencil Library con el comando `ng build component-library` o `npx ng build component-library`.

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm start
```

Esto iniciará un servidor de desarrollo y abrirá automáticamente la aplicación en tu navegador predeterminado. Si el navegador no se abre automáticamente, puedes acceder a la aplicación a través de la URL http://localhost:4200/. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Generación de Componentes de Stencil Library

Para generar los componentes de Stencil Library, ejecuta el siguiente comando:

```bash
ng build component-library
```

## Compilación

Para construir el proyecto y obtener los archivos de distribución, ejecuta el siguiente comando:

```bash
npm run build
```

Los archivos de distribución se almacenarán en el directorio dist/.

## Obtener ayuda adicional

```bash
ng help
```

También puedes consultar la página <a href="https://angular.io/cli">Angular CLI Overview and Command Reference</a> para más detalles.

## Contribución

Si deseas contribuir al proyecto, te damos la bienvenida a realizar tus aportes. Sigue estos pasos:

1. Crea un fork del repositorio desde la página GitHub.

2. Clona tu fork en tu máquina local:

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

3. Crea una nueva rama para trabajar en tu nueva funcionalidad o corrección:

```bash
git checkout -b nombre-rama
```

4. Realiza tus cambios y realiza un commit con un mensaje descriptivo de los cambios realizados:

```bash
git add .
git commit -m "Mensaje descriptivo de los cambios realizados"
```

5. Envía tus cambios a tu repositorio remoto:

```bash
git push origin nombre-rama
```

6. Crea una solicitud pull desde tu repositorio en GitHub.

## Licencia

Este proyecto está bajo la Licencia [Nombre de la licencia]. Consulta el archivo <a href="https://github.com/iKurito/reto-tecnico-ibk/blob/main/LICENSE">LICENSE.md</a> para más detalles.

## Contacto

Si tienes preguntas, sugerencias o deseas contactar al equipo de desarrollo, puedes hacerlo a través de ronaldo.tunque@pucp.edu.pe.
