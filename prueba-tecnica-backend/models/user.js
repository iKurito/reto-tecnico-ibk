const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  names: {
    type: String,
    required: [true, "Los nombres son obligatorios"],
  },
  surnames: {
    type: String,
    required: [true, "Los apellidos son obligatorios"],
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  address: {
    type: String,
  },
  dni: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = model("User", UserSchema);
