import {getSupplier, postSupplier, deleteSupplier, updateSupplier} from "../controller/v1/controllerProveedor.js";

let getProveedor = {
    "1.0.0": getSupplier
}

let addProveedor  = {
    "1.0.0" : postSupplier
}

let deleteProveedor  = {
    "1.0.0" : deleteSupplier
}

let putProveedor = {
    "1.0.0" : updateSupplier
}

export {getProveedor, addProveedor, deleteProveedor, putProveedor}