const Server = require("../models/server.model");

/**
 * Descripción: Prueba del módulo principal del proyecto.
 */
describe("Test módulo principal del proyecto", () => {
  test("Should be a function", async () => {
    await expect(typeof Server).toBe("function");
  });
});
