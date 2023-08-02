const express = require("express");
const cors = require("cors");

const {
  dbConnection,
  dbDisconnection,
  getUri,
} = require("../database/config.database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      users: "/api/v1/users",
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
