# User Management System con Web Components

## Descripción del Proyecto

El objetivo principal de este proyecto es desarrollar un sistema de gestión de usuarios altamente modular, donde cada componente de la interfaz de usuario sea independiente y reutilizable. Se ha utilizado StencilJS para generar web components que se integren sin problemas en la aplicación Angular existente.

## Tecnologías Utilizadas

- StencilJS: Framework para la creación de web components.
- Angular: Plataforma de desarrollo de aplicaciones web.
- TypeScript: Lenguaje de programación para el desarrollo de aplicaciones en Angular.
- Webpack: Herramienta de empaquetado de módulos.
- SASS: Lenguaje de hojas de estilo.
- Storybook: Plataforma de documentación interactiva para web components.

## Inicio Rápido

Para poner en marcha el proyecto localmente, sigue estos pasos:

1. Clona este repositorio.

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

2. Dirígete a la carpeta del proyecto.

```bash
cd reto-tecnico-ibk/prueba-tecnica-frontend/packages/stencil-library
```

3. Instala las dependencias usando el administrador de paquetes preferido (npm o yarn) con el siguiente comando:

```bash
npm install
```

4. Crea un nuevo componente web utilizando StencilJS:

```bash
npx stencil generate
```

5. Ejecuta la aplicación en modo de desarrollo:

```bash
npm start
```

6. Genera un build de producción

```bash
npm run build
```

## Documentación con Storybook

Para acceder a la documentación de los web components utilizando Storybook, sigue estos pasos:

1. Inicia Storybook localmente con el siguiente comando:

```bash
npm run storybook
```

2. Genera una versión estática de Storybook lista para implementación:

```bash
npm run build-storybook
```
