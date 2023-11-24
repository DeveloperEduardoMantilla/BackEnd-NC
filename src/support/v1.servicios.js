import {getServicio, postServicio, deleteService, updateServicio} from "../controller/v1/controllerServicio.js";

let getServicios = {
    "1.0.0": getServicio
}

let addServicio  = {
    "1.0.0" : postServicio
}

let deleteServicio  = {
    "1.0.0" : deleteService
}

let putServicio = {
    "1.0.0" : updateServicio
}

export { getServicios, addServicio, deleteServicio, putServicio}