import { body } from "express-validator";
const validateClient = [

    body("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .isString()
    .withMessage("El campo nombre debe ser de tipo string."),

    body("comoLlego")
    .notEmpty()
    .withMessage("El campo comoLlego es obligatorio")
    .isString()
    .withMessage("El campo comoLlego debe ser de tipo string."),

    body("telefono")
    .notEmpty()
    .withMessage("El campo telefono es obligatorio")
    .isString()
    .withMessage("El campo telefono debe ser de tipo string."),

    body("descripcion")
    .isString()
    .withMessage("El campo descripcion debe ser de tipo string."),
];

export { validateClient};