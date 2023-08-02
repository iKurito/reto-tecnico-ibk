const Server = require("../../models/server.model");
const request = require("supertest");

describe("Test rutas de usuario", () => {
  const server = new Server();
  let userId;
  let response;

  describe("GET /api/v1/users - Obtener usuarios", () => {
    test("Should return 200", async () => {
      response = await request(server.app).get("/api/v1/users").send();
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /api/v1/user - Crear usuario", () => {
    test("Should return 200", async () => {
      const body = {
        names: "Test",
        surnames: "Post",
        email: "test@post.com",
      };
      response = await request(server.app).post("/api/v1/users").send(body);
      const { uid } = JSON.parse(response.text);
      userId = uid;
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/v1/users/:id - Obtener usuario por id", () => {
    test("Should return 200", async () => {
      response = await request(server.app)
        .get(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(200);
    });
  });

  describe("PATCH /api/v1/users/:id - Actualizar usuario", () => {
    test("Should return 200", async () => {
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
    test("Should return 200", async () => {
      response = await request(server.app)
        .delete(`/api/v1/users/${userId}`)
        .send();
      expect(response.statusCode).toBe(200);
    });
  });

  afterAll((done) => {
    server.disconnectToDB();
    console.log("Desconectado de la base de datos");
    done();
  });
});
