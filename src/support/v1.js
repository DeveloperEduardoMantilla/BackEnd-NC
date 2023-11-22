import {getClient, postClient, deleteClient} from "../controller/v1/controllerCliente.js";

let getClientes = {
    "1.0.0": getClient
}

let addCliente  = {
    "1.0.0" : postClient
}

let deleteCliente  = {
    "1.0.0" : deleteClient
}

export {getClientes, addCliente, deleteCliente}