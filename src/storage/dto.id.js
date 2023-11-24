import { param  } from "express-validator";
const validateId = [
    param("id")
    .notEmpty()
    .withMessage("El campo id es obligatorio")
];

export { validateId};