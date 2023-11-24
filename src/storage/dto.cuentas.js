import { body } from "express-validator";
const validateCuenta = [

    body("idServicio")
    .notEmpty()
    .withMessage("El campo idServicio es obligatorio"),

    body("correo")
    .notEmpty()
    .withMessage("El campo correo es obligatorio")
    .isString()
    .withMessage("El campo correo debe ser de tipo string."),

    body("contrasenia")
    .notEmpty()
    .withMessage("El campo contrasenia es obligatorio")
    .isString()
    .withMessage("El campo contrasenia debe ser de tipo string."),

    body("fechaCompra")
    .notEmpty()
    .withMessage("El campo fechaCompra es obligatorio")
    .isString()
    .withMessage("El campo fechaCompra debe ser de tipo string."),

    body("fechaPago")
    .notEmpty()
    .withMessage("El campo fechaPago es obligatorio")
    .isString()
    .withMessage("El campo fechaPago debe ser de tipo string."),

    body("descripcion")
    .isString()
    .withMessage("El campo descripcion debe ser de tipo string."),

];

export { validateCuenta};