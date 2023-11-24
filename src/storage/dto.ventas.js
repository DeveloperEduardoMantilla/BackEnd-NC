import { body } from "express-validator";
const validateVenta = [

    body("idCliente")
    .notEmpty()
    .withMessage("El campo idCliente es obligatorio"),

    body("perfil")
    .notEmpty()
    .withMessage("El campo perfil es obligatorio")
    .isString()
    .withMessage("El campo perfil debe ser de tipo string."),

    body("contraseniaPerfil")
    .notEmpty()
    .withMessage("El campo contraseniaPerfil es obligatorio")
    .isString()
    .withMessage("El campo contraseniaPerfil debe ser de tipo string."),

    body("idCuenta")
    .notEmpty()
    .withMessage("El campo idCuenta es obligatorio"),

    body("idVendedor")
    .notEmpty()
    .withMessage("El campo idVendedor es obligatorio"),

    body("tiempo")
    .notEmpty()
    .withMessage("El campo tiempo es obligatorio"),

    body("fechaCompra")
    .notEmpty()
    .withMessage("El campo fechaCompra es obligatorio")
    .isString()
    .withMessage("El campo fechaCompra debe ser de tipo string."),

    body("fechaCorte")
    .notEmpty()
    .withMessage("El campo fechaCorte es obligatorio")
    .isString()
    .withMessage("El campo fechaCorte debe ser de tipo string."),

    body("costo")
    .notEmpty()
    .withMessage("El campo costo es obligatorio")
    .isString()
    .withMessage("El campo costo debe ser de tipo string."),

    body("pago")
    .notEmpty()
    .withMessage("El campo pago es obligatorio"),

    body("descripcion")
    .isString()
    .withMessage("El campo descripcion debe ser de tipo string."),

    body("cantRenovacion")
    .notEmpty()
    .withMessage("El campo cantRenovacion es obligatorio")
    .isString()
    .withMessage("El campo cantRenovacion debe ser de tipo string."),

    body("estadoVenta")
    .notEmpty()
    .withMessage("El campo estadoVenta es obligatorio")
    .isString()
    .withMessage("El campo estadoVenta debe ser de tipo string.")

];

export { validateVenta};