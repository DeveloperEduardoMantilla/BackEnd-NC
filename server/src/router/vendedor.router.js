import express from 'express';
import { getVendedores, addVendedor, deleteVendedor, putVendedor } from '../support/v1.vendedor.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateVendedor} from "../storage/dto.vendedor.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appVenta = express();

appVenta.get("/vendedores", version(getVendedores)) 
appVenta.post("/vendedor", validateVendedor, verifyDTO, version(addVendedor)) 
appVenta.delete("/vendedor/:id", validateId, verifyDTO, version(deleteVendedor))
appVenta.put("/vendedor", validateVendedor, verifyDTO, version(putVendedor))

export default appVenta;