import express from 'express';
import { getVentas, addVenta, deleteVenta, putVenta } from '../support/v1.ventas.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateVenta} from "../storage/dto.ventas.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appVenta = express();

appVenta.get("/ventas", version(getVentas)) 
appVenta.post("/venta", validateVenta, verifyDTO, version(addVenta)) 
appVenta.delete("/venta/:id", validateId, verifyDTO, version(deleteVenta))
appVenta.put("/venta", validateVenta, verifyDTO, version(putVenta))

export default appVenta;