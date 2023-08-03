const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const {
  dbConnection,
  dbDisconnection,
  getUri,
} = require("../database/config.database");

const openApiDocumentation = require("../docs/openApiDocumentation");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      users: "/api/v1/users",
      docs: "/api/v1/docs",
    };
    this.connectToDB();
    this.middlewares();
    this.routes();
  }

  async connectToDB() {
    const uri = await getUri();
    await dbConnection(uri);
  }

  async disconnectToDB() {
    await dbDisconnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.users, require("../routes/users.route"));
    this.app.use(
      this.paths.docs,
      swaggerUi.serve,
      swaggerUi.setup(openApiDocumentation),
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
