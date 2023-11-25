import express from 'express';
import { getServicios, addServicio, deleteServicio, putServicio } from '../support/v1.servicios.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateServicio} from "../storage/dto.servicio.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appServicio = express();

appServicio.get("/servicios", version(getServicios)) 
appServicio.post("/servicio", validateServicio, verifyDTO, version(addServicio)) 
appServicio.delete("/servicio/:id", validateId, verifyDTO, version(deleteServicio))
appServicio.put("/servicio", validateServicio, verifyDTO, version(putServicio))

export default appServicio;