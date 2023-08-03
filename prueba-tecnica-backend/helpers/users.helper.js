const { User } = require("../models");

/**
 * Verifica si ya existe un usuario con el correo electrónico proporcionado en la base de datos.
 *
 * @param {String} email - El correo electrónico del usuario a verificar.
 * @throws {Error} - Un error en caso de que el correo electrónico ya esté registrado en la base de datos.
 */
const existUserByEmail = async (email = "") => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`El correo ${email} ya está registrado`);
  }
};

/**
 * Verifica si existe un usuario con el ID proporcionado en la base de datos.
 *
 * @param {String} id - El ID del usuario a verificar.
 * @throws {Error} - Un error en caso de que el ID no exista en la base de datos.
 */
const existUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`El id: ${id} no existe`);
  }
};

module.exports = {
  existUserByEmail,
  existUserById,
};
