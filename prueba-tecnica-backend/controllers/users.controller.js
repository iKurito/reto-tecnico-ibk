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
    return res.status(200).json({ total, users });
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const getUserById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
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
    return res.status(201).json(user);
  } catch (error) {
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
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const removeUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    return res.sendStatus(204);
  } catch (error) {
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
