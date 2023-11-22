import express from 'express';
import { getClientes, addCliente, deleteCliente } from '../support/v1.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateClient} from "../storage/dto.clientes.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appCliente = express();

appCliente.get("/clientes", version(getClientes)) 
appCliente.post("/clientes", validateClient, verifyDTO, version(addCliente)) 
appCliente.delete("/clientes/:id", validateId, verifyDTO, version(deleteCliente))

export default appCliente;