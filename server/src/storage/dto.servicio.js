import { body } from "express-validator";
const validateServicio = [

    body("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .isString()
    .withMessage("El campo nombre debe ser de tipo string."),

    body("descripcion")
    .isString()
    .withMessage("El campo descripcion debe ser de tipo string.")

];

export { validateServicio};