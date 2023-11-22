import {getClient, postClient} from "../controller/v1/controller.js";

let getClientes = {
    "1.0.0": getClient
}

let addCliente  = {
    "1.0.0" : postClient
}

export {getClientes, addCliente}