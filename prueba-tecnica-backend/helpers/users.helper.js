const { User } = require("../models");

const existUserByEmail = async (email = "") => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`El correo ${email} ya está registrado`);
  }
};

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
