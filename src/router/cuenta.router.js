import express from 'express';
import { getCuentas, addCuenta, deleteCuenta, putCuenta } from '../support/v1.cuentas.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateCuenta} from "../storage/dto.cuentas.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appCuenta = express();

appCuenta.get("/cuentas", version(getCuentas)) 
appCuenta.post("/cuenta", validateCuenta, verifyDTO, version(addCuenta)) 
appCuenta.delete("/cuenta/:id", validateId, verifyDTO, version(deleteCuenta))
appCuenta.put("/cuenta", validateCuenta, verifyDTO, version(putCuenta))

export default appCuenta;