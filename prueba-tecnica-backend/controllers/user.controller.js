const { response, request } = require("express");

const { User } = require("../models");

const getUsers = async (req = request, res = response) => {
  try {
    const { limit = process.env.LIMIT, from = 0 } = req.query;
    const query = { status: true };
    const [total, users] = await Promise.all([
      User.countDocuments(query),
      User.find(query).skip(Number(from)).limit(Number(limit)),
    ]);
    return res.json({ total, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const getUserById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener usuario" });
  }
};

const createUser = async (req = request, res = response) => {
  try {
    const { names, surnames, email, address, dni, description, phone } =
      req.body;
    const user = new User({
      names,
      surnames,
      email,
      address,
      dni,
      description,
      phone,
    });
    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al crear usuario" });
  }
};

const updateUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { names, surnames, email, address, dni, description, phone } =
      req.body;
    await User.findByIdAndUpdate(id, {
      names,
      surnames,
      email,
      address,
      dni,
      description,
      phone,
    });
    const user = await User.findById(id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const removeUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    return res.json({ message: "Usuario removido" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al remover usuario" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
