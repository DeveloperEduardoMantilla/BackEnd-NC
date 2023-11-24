import {getVenta, postVenta, deleteVent, updateVenta} from "../controller/v1/controllerVenta.js";

let getVentas = {
    "1.0.0": getVenta
}

let addVenta  = {
    "1.0.0" : postVenta
}

let deleteVenta  = {
    "1.0.0" : deleteVent
}

let putVenta = {
    "1.0.0" : updateVenta
}

export {getVentas, addVenta, deleteVenta, putVenta}