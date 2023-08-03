const Server = require("../../models/server.model");
const request = require("supertest");

const server = new Server();

describe("Test rutas de usuario con respuesta de error", () => {
  let userId = "123456789";
  let response;

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

  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Debe retornar 400", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(400);
    });
  });

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

  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar 400", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(400);
    });
  });
});

describe("Test rutas de usuario con respuesta satisfactoria", () => {
  let userId;
  let response;

  describe("GET /api/v1/users - Obtener usuarios", () => {
    test("Debe retornar 200", async () => {
      response = await request(server.app).get("/api/v1/users").send();
      expect(response.statusCode).toBe(200);
    });
  });

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

  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Debe retornar 200", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(200);
    });
  });

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

  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar 204", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(204);
    });
  });
});

describe("Test rutas de usuario con respuestas de valores esperados", () => {
  let userId;
  let response;

  describe("GET /api/v1/users - Obtener usuarios", () => {
    test("Debe retornar valor esperado", async () => {
      response = await request(server.app).get("/api/v1/users").send();
      const objectExpected = { total: 0, users: [] };
      expect(response.body).toEqual(objectExpected);
    });
  });

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

  describe("DELETE /api/v1/users/:id - Eliminar usuario", () => {
    test("Debe retornar valor esperado", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.body).toEqual({});
    });
  });

  afterAll((done) => {
    server.disconnectToDB();
    console.log("Desconectado de la base de datos");
    done();
  });
});
