const { validationResult } = require("express-validator");

/**
 * Middleware para validar los campos de una solicitud utilizando express-validator.
 * Si hay errores de validación, devuelve una respuesta con un código de estado 400 y una lista de errores en formato JSON.
 * Si la validación es exitosa, pasa al siguiente middleware o controlador.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @param {Function} next - La función para pasar al siguiente middleware o controlador.
 */
const validateFields = (req, res, next) => {
  // Obtiene los errores de validación de la solicitud
  const errors = validationResult(req);
  // Si hay errores de validación, devuelve una respuesta con el código de estado 400 y la lista de errores en formato JSON
  if (!errors.isEmpty()) {
    // Si no hay errores de validación, pasa al siguiente middleware o controlador
    return res.status(400).json(errors);
  }
  next();
};

module.exports = {
  validateFields,
};
