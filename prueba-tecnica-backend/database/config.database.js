const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

mongoose.Promise = Promise;

let mongoServer;

/**
 * Obtiene la URI de la base de datos MongoDB en función del entorno de ejecución.
 *
 * @returns {String} - La URI de la base de datos MongoDB.
 * @throws {Error} - Un error en caso de que falle al obtener la URI.
 */
const getUri = async () => {
  if (process.env.NODE_ENV === "test") {
    mongoServer = await MongoMemoryServer.create();
    return mongoServer.getUri();
  }
  return process.env.MONGODB_URI;
};

/**
 * Establece la conexión con la base de datos MongoDB.
 *
 * @param {String} uri - La URI de la base de datos MongoDB a la que se conectará.
 * @throws {Error} - Un error en caso de que falle al establecer la conexión con la base de datos.
 */
const dbConnection = async (uri) => {
  const moongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  try {
    await mongoose.connect(uri, moongooseOptions);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

/**
 * Cierra la conexión con la base de datos MongoDB.
 *
 * @throws {Error} - Un error en caso de que falle al cerrar la conexión con la base de datos.
 */
const dbDisconnection = async () => {
  try {
    await mongoose.disconnect();
    if (process.env.NODE_ENV === "test") {
      await mongoServer.stop();
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de desconectar la base de datos");
  }
};

module.exports = {
  dbConnection,
  dbDisconnection,
  getUri,
};
