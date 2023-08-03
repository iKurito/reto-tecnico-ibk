const { response, request } = require("express");

const { User } = require("../models");

/**
 * Obtiene una lista de usuarios con paginación.
 *
 * @route GET /api/users
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto JSON que contiene el total de usuarios y una lista de usuarios.
 * @throws {Object} - Un objeto JSON con un mensaje de error en caso de que falle la consulta.
 */
const getUsers = async (req = request, res = response) => {
  try {
    const { limit = process.env.LIMIT, from = 0 } = req.query;
    const [total, users] = await Promise.all([
      User.countDocuments(),
      User.find().skip(Number(from)).limit(Number(limit)),
    ]);
    return res.status(200).json({ total, users });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "Error al obtener usuarios" });
  }
};

/**
 * Obtiene un usuario por su ID.
 *
 * @route GET /api/users/:id
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto JSON que contiene los detalles del usuario encontrado.
 * @throws {Object} - Un objeto JSON con un mensaje de error en caso de que falle la consulta.
 */
const getUserById = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "Error al obtener usuario" });
  }
};

/**
 * Crea un nuevo usuario.
 *
 * @route POST /api/users
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto JSON que contiene los detalles del usuario creado.
 * @throws {Object} - Un objeto JSON con un mensaje de error en caso de que falle la creación del usuario.
 */
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
    return res
      .status(500)
      .json({ statusCode: 500, message: "Error al crear usuario" });
  }
};

/**
 * Actualiza los detalles de un usuario existente.
 *
 * @route PUT /api/users/:id
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto JSON que contiene los detalles actualizados del usuario.
 * @throws {Object} - Un objeto JSON con un mensaje de error en caso de que falle la actualización del usuario.
 */
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
    return res
      .status(500)
      .json({ statusCode: 500, message: "Error al actualizar usuario" });
  }
};

/**
 * Elimina un usuario por su ID.
 *
 * @route DELETE /api/users/:id
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Number} - Un código de estado 204 indicando que la eliminación fue exitosa.
 * @throws {Object} - Un objeto JSON con un mensaje de error en caso de que falle la eliminación del usuario.
 */
const removeUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    return res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "Error al remover usuario" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
