import express from 'express';
import { getClientes, addCliente, deleteCliente, putCliente } from '../support/v1.cliente.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateClient} from "../storage/dto.clientes.js";
import {validateId} from "../storage/dto.id.js";

const version = routesVersioning();
let appCliente = express();

appCliente.get("/clientes", version(getClientes)) 
appCliente.post("/cliente", validateClient, verifyDTO, version(addCliente)) 
appCliente.delete("/cliente/:id", validateId, verifyDTO, version(deleteCliente))
appCliente.put("/cliente", validateClient, verifyDTO, version(putCliente))

export default appCliente;