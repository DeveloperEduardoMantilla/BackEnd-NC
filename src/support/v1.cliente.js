import {getClient, postClient, deleteClient, updateClient} from "../controller/v1/controllerCliente.js";

let getClientes = {
    "1.0.0": getClient
}

let addCliente  = {
    "1.0.0" : postClient
}

let deleteCliente  = {
    "1.0.0" : deleteClient
}

let putCliente = {
    "1.0.0" : updateClient
}

export {getClientes, addCliente, deleteCliente, putCliente}