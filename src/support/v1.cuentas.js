import {getAccount, postAccount, deleteAccount, updateAccount} from "../controller/v1/controllerCuenta.js";

let getCuentas = {
    "1.0.0": getAccount
}

let addCuenta  = {
    "1.0.0" : postAccount
}

let deleteCuenta  = {
    "1.0.0" : deleteAccount
}

let putCuenta = {
    "1.0.0" : updateAccount
}

export { getCuentas, addCuenta, deleteCuenta, putCuenta}