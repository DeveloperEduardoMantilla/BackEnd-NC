import {getVendedor, postVendedores, deleteVendedores, updateVendedor} from "../controller/v1/controllerVendedor.js";

let getVendedores = {
    "1.0.0": getVendedor
}

let addVendedor  = {
    "1.0.0" : postVendedores
}

let deleteVendedor  = {
    "1.0.0" : deleteVendedores
}

let putVendedor = {
    "1.0.0" : updateVendedor
}

export { getVendedores, addVendedor, deleteVendedor, putVendedor}