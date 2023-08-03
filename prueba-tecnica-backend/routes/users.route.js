const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middlewares");

const { existUserById, existUserByEmail } = require("../helpers");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
} = require("../controllers/users.controller");

const router = Router();

/** Obtiene una lista de usuarios con paginación.
 * Método: GET
 * Ruta: /
 * Controlador: getUsers
 * Descripción: Esta ruta obtiene una lista de usuarios
 */
router.get("/", getUsers);

/** Obtiene un usuario por su ID.
 * Método: GET
 * Ruta: /:id
 * Middleware de validación:
 *   - Verifica que el parámetro id sea un ID de MongoDB válido.
 *   - Verifica que el usuario con el ID especificado exista en la base de datos.
 * Controlador: getUserById
 * Descripción: Esta ruta obtiene los detalles de un usuario por su ID.
 */
router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    validateFields,
  ],
  getUserById,
);

/** Crea un nuevo usuario.
 * Método: POST
 * Ruta: /
 * Middleware de validación:
 *   - Verifica que el campo names no esté vacío.
 *   - Verifica que el campo surnames no esté vacío.
 *   - Verifica que el campo email sea un correo electrónico válido.
 *   - Verifica que el correo electrónico no esté registrado en la base de datos.
 * Controlador: createUser
 * Descripción: Esta ruta crea un nuevo usuario con los detalles proporcionados.
 */
router.post(
  "/",
  [
    check("names", "El nombre es obligatorio").not().isEmpty(),
    check("surnames", "El apellido es obligatorio").not().isEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("email").custom(existUserByEmail),
    validateFields,
  ],
  createUser,
);

/** Actualiza los detalles de un usuario existente.
 * Método: PATCH
 * Ruta: /:id
 * Middleware de validación:
 *   - Verifica que el parámetro id sea un ID de MongoDB válido.
 *   - Verifica que el usuario con el ID especificado exista en la base de datos.
 *   - Verifica que el correo electrónico no esté registrado en la base de datos (opcional, si el campo email se proporciona en la solicitud).
 * Controlador: updateUser
 * Descripción: Esta ruta actualiza los detalles de un usuario existente con la información proporcionada.
 */
router.patch(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    check("email").custom(existUserByEmail),
    validateFields,
  ],
  updateUser,
);

/** Elimina un usuario por su ID.
 * Método: DELETE
 * Ruta: /:id
 * Middleware de validación:
 *   - Verifica que el parámetro id sea un ID de MongoDB válido.
 *   - Verifica que el usuario con el ID especificado exista en la base de datos.
 * Controlador: removeUser
 * Descripción: Esta ruta elimina un usuario de la base de datos por su ID.
 */
router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    validateFields,
  ],
  removeUser,
);

module.exports = router;
