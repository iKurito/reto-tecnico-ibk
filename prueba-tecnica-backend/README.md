# Backend del User Management System con Express

Este es el backend de una aplicación que permite el mantenimiento de usuarios a través de un CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Express.js.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/iKurito/reto-tecnico-ibk.git
```

2. Dirígite a la carpeta del proyecto:

```bash
cd reto-tecnico-ibk/prueba-tecnica-backend
```

3. Instala las dependencias del proyecto:

```bash
yarn
```

## Configuración

1. Para configurar las variables de entorno, crea un archivo .env en la raíz del proyecto y copia el contenido del archivo .env.etemplate en él. Luego, reemplaza los valores de las variables de entorno con los valores correspondientes.

- Si eres usuario de Linux o Mac, puedes ejecutar el siguiente comando en la raíz del proyecto para crear el archivo .env:

  ```bash
  cp .env.template .env
  ```

- Si eres usuario de Windows, puedes crear el archivo .env manualmente y copiar el contenido del archivo .env.template en él.

2. Desplegar la base de datos MongoDB en un contenedor Docker:

```bash
docker-compose up -d
```

## Uso

1. Inicia el servidor:

```bash
yarn dev
```

2. El servidor estará disponible en `http://localhost:8080`.

3. Utiliza una herramienta como Postman o cURL para interactuar con el API y realizar operaciones CRUD en los usuarios.

## Endpoints

Para mayor detalle de los endpoints puede revisar la documentación con Swagger en `http://localhost:8080/api/v1/docs`.

### Obtener todos los usuarios

- **URL**

  `/api/v1/users`

- **Método:**

  `GET`

- **Respuesta exitosa:**

  - **Código:** 200
  - **Contenido:**

    ```json
    [
      "total": 1,
      {
        "names": "Ronaldo Romario",
        "surnames": "Tunque Cahui",
        "email": "ronaldo.tunque@pucp.edu.pe",
        "address": "Av. Universitaria 1801",
        "dni": "12345678",
        "description": "Soy desarrollador fullstack aspirando a ser ingeniero de software viviendo en Lima, Perú.",
        "phone": "987654321",
        "uid": "5f9b0b5b9c9b4b0017b0b0a0"
      }
    ]
    ```

### Obtener un usuario por su ID

- **URL**

  `/api/v1/users/:id`

- **Método:**

  `GET`

- **Respuesta exitosa:**

  - **Código:** 200
  - **Contenido:**

    ```json
    {
      "names": "Ronaldo Romario",
      "surnames": "Tunque Cahui",
      "email": "ronaldo.tunque@pucp.edu.pe",
      "address": "Av. Universitaria 1801",
      "dni": "12345678",
      "description": "Soy desarrollador fullstack aspirando a ser ingeniero de software viviendo en Lima, Perú.",
      "phone": "987654321",
      "uid": "5f9b0b5b9c9b4b0017b0b0a0"
    }
    ```

### Crear un usuario

- **URL**

  `/api/v1/users`

- **Método:**

  `POST`

- **Cuerpo de la petición:**

  ```json
  {
    "names": "Ronaldo",
    "surnames": "Benavides Salazar",
    "email": "sfrronaldo@gmail.com",
    "address": "Av. Universitaria 1801",
    "dni": "87654321",
    "description": "Soy abogado viviendo en Lima, Perú.",
    "phone": "123456789"
  }
  ```

- **Respuesta exitosa:**

  - **Código:** 201
  - **Contenido:**

    ```json
    {
      "names": "Ronaldo",
      "surnames": "Benavides Salazar",
      "email": "sfrronaldo@gmail.com",
      "address": "Av. Universitaria 1801",
      "dni": "87654321",
      "description": "Soy abogado viviendo en Lima, Perú.",
      "phone": "123456789",
      "uid": "5f3b0c2b9c9b4b0017b0b0a1"
    }
    ```

### Actualizar un usuario

- **URL**

  `/api/v1/users/:id`

- **Método:**

  `PUT`

- **Query Params:**

  - **id:** ID del usuario a actualizar

- **Valor de id de ejemplo:** 5f3b0c2b9c9b4b0017b0b0a1

- **Cuerpo de la petición:**

  ```json
  {
    "names": "Gloria",
    "surnames": "Tunque"
  }
  ```

- **Respuesta exitosa:**

  - **Código:** 200
  - **Contenido:**

    ```json
    {
      "names": "Gloria",
      "surnames": "Tunque",
      "email": "sfrronaldo@gmail.com",
      "address": "Av. Universitaria 1801",
      "dni": "87654321",
      "description": "Soy abogado viviendo en Lima, Perú.",
      "phone": "123456789",
      "uid": "5f3b0c2b9c9b4b0017b0b0a1"
    }
    ```

### Eliminar un usuario

- **URL**

  `/api/v1/users/:id`

- **Método:**

  `DELETE`

- **Query Params:**

  - **id:** ID del usuario a eliminar

- **Valor de id de ejemplo:** 5f3b0c2b9c9b4b0017b0b0a1

- **Respuesta exitosa:**

  - **Código:** 204
  - **Contenido:**

    ```json
    {}
    ```

## Pruebas

Para ejecutar las pruebas unitarias, ejecuta el siguiente comando:

```bash
yarn test
```

## Contribuciones

Si encuentras algún error o tienes sugerencias de mejora, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia [MIT](https://choosealicense.com/licenses/mit/). Ver el archivo <a href="https://github.com/iKurito/reto-tecnico-ibk/blob/main/LICENSE">LICENSE</a> para más detalles.
