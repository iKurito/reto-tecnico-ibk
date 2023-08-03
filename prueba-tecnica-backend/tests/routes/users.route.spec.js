const Server = require("../../models/server.model");
const request = require("supertest");

const server = new Server();

/**
 * Testea las rutas de usuario con respuestas de error (status code 400).
 */
describe("Test rutas de usuario con respuesta de error", () => {
  let userId = "123456789";
  let response;

  /**
   * Testea la ruta POST /api/v1/users - Crear usuario con datos incompletos.
   */
  describe("POST /api/v1/user - Crear usuario", () => {
    test("Debe retornar 400", async () => {
      const body = {
        names: "Test",
        surnames: "Post",
      };
      response = await request(server.app).post("/api/v1/users").send(body);
      expect(response.statusCode).toBe(400);
    });
  });

  /**
   * Testea la ruta GET /api/v1/users/:id - Obtener usuario por id con id inválido.
   */
  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Debe retornar 400", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(400);
    });
  });

  /**
   * Testea la ruta PATCH /api/v1/users/:id - Actualizar usuario con id inválido.
   */
  describe("PATCH /api/v1/users/:id - Actualizar usuario", () => {
    test("Debe retornar 400", async () => {
      const body = {
        names: "Actualizar",
        surnames: "Test",
      };
      response = await request(server.app)
        .patch(`/api/v1/users/${userId}`)
        .send(body);
      expect(response.statusCode).toBe(400);
    });
  });

  /**
   * Testea la ruta DELETE /api/v1/users/:id - Eliminar usuario con id inválido.
   */
  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar 400", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(400);
    });
  });
});

/**
 * Testea las rutas de usuario con respuestas satisfactorias (status code 200, 201 y 204).
 */
describe("Test rutas de usuario con respuesta satisfactoria", () => {
  let userId;
  let response;

  /**
   * Testea la ruta GET /api/v1/users - Obtener usuarios (debe retornar 200).
   */
  describe("GET /api/v1/users - Obtener usuarios", () => {
    test("Debe retornar 200", async () => {
      response = await request(server.app).get("/api/v1/users").send();
      expect(response.statusCode).toBe(200);
    });
  });

  /**
   * Testea la ruta POST /api/v1/users - Crear usuario (debe retornar 201).
   */
  describe("POST /api/v1/user - Crear usuario", () => {
    test("Debe retornar 201", async () => {
      const body = {
        names: "Test",
        surnames: "Post",
        email: "test@post.com",
        address: "Calle 123",
        phone: "123456789",
        dni: "12345678",
        description: "Test Description",
      };
      response = await request(server.app).post("/api/v1/users").send(body);
      const { uid } = JSON.parse(response.text);
      userId = uid;
      expect(response.statusCode).toBe(201);
    });
  });

  /**
   * Testea la ruta GET /api/v1/users/:id - Obtener usuario por id (debe retornar 200).
   */
  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Debe retornar 200", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(200);
    });
  });

  /**
   * Testea la ruta PATCH /api/v1/users/:id - Actualizar usuario (debe retornar 200).
   */
  describe("PATCH /api/v1/users/:id - Actualizar usuario", () => {
    test("Debe retornar 200", async () => {
      const body = {
        names: "Actualizar",
        surnames: "Test",
      };
      response = await request(server.app)
        .patch(`/api/v1/users/${userId}`)
        .send(body);
      expect(response.statusCode).toBe(200);
    });
  });

  /**
   * Testea la ruta DELETE /api/v1/users/:id - Eliminar usuario (debe retornar 204).
   */
  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar 204", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(204);
    });
  });
});

/**
 * Testea las rutas de usuario con respuestas de valores esperados en el body de la respuesta.
 */
describe("Test rutas de usuario con respuestas de valores esperados", () => {
  let userId;
  let response;

  /**
   * Testea la ruta GET /api/v1/users - Obtener usuarios (debe retornar valor esperado).
   */
  describe("GET /api/v1/users - Obtener usuarios", () => {
    test("Debe retornar valor esperado", async () => {
      response = await request(server.app).get("/api/v1/users").send();
      const objectExpected = { total: 0, users: [] };
      expect(response.body).toEqual(objectExpected);
    });
  });

  /**
   * Testea la ruta POST /api/v1/users - Crear usuario (debe retornar valor esperado).
   */
  describe("POST /api/v1/user - Crear usuario", () => {
    test("Debe retornar valor esperado", async () => {
      const body = {
        names: "Test",
        surnames: "Post",
        email: "test@post.com",
        address: "Calle 123",
        phone: "123456789",
        dni: "12345678",
        description: "Test Description",
      };
      response = await request(server.app).post("/api/v1/users").send(body);
      const { uid } = JSON.parse(response.text);
      userId = uid;
      expect(response.body).toEqual({ ...body, uid });
    });
  });

  /**
   * Testea la ruta GET /api/v1/users/:id - Obtener usuario por id (debe retornar valor esperado).
   */
  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Debe retornar valor esperado", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.body).toEqual({
        names: "Test",
        surnames: "Post",
        email: "test@post.com",
        address: "Calle 123",
        phone: "123456789",
        dni: "12345678",
        description: "Test Description",
        uid: userId,
      });
    });
  });

  /**
   * Testea la ruta PATCH /api/v1/users/:id - Actualizar usuario (debe retornar valor esperado).
   */
  describe("PATCH /api/v1/users/:id - Actualizar usuario", () => {
    test("Debe retornar valor esperado", async () => {
      const body = {
        names: "Prueba",
        surnames: "Archivo",
      };
      response = await request(server.app)
        .patch(`/api/v1/users/${userId}`)
        .send(body);
      expect(response.body).toEqual({
        ...body,
        email: "test@post.com",
        address: "Calle 123",
        phone: "123456789",
        dni: "12345678",
        description: "Test Description",
        uid: userId,
      });
    });
  });

  /**
   * Testea la ruta DELETE /api/v1/users/:id - Eliminar usuario (debe retornar valor esperado).
   */
  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar valor esperado", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.body).toEqual({});
    });
  });

  /**
   * Después de ejecutar todos los tests, desconectar la base de datos.
   */
  afterAll((done) => {
    server.disconnectToDB();
    console.log("Desconectado de la base de datos");
    done();
  });
});
