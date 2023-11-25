import express from 'express';
import { getProveedor, addProveedor, deleteProveedor, putProveedor } from '../support/v1.proveedor.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {valdiateProveedor} from "../storage/dto.proveedor.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appServicio = express();

appServicio.get("/proveedores", version(getProveedor)) 
appServicio.post("/proveedor", valdiateProveedor, verifyDTO, version(addProveedor)) 
appServicio.delete("/proveedor/:id", validateId, verifyDTO, version(deleteProveedor))
appServicio.put("/proveedor", valdiateProveedor, verifyDTO, version(putProveedor))

export default appServicio;