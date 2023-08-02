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
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);

router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existUserById),
    validateFields,
  ],
  getUserById,
);

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
