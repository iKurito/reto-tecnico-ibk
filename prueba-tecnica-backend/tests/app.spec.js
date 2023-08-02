const Server = require("../models/server.model");

describe("Test módulo principal del proyecto", () => {
  test("Should be a function", async () => {
    await expect(typeof Server).toBe("function");
  });
});
