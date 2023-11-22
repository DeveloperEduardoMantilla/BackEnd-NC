import express from 'express';
import { getClientes, addCliente } from '../support/v1.js';
import routesVersioning from "express-routes-versioning";
import {verifyDTO} from "../middlewares/DTO/validator-errors.js";
import {validateClient} from "../storage/dto.clientes.js";

const version = routesVersioning();
let appCliente = express();

appCliente.get("/clientes", version(getClientes)) 
appCliente.post("/clientes", validateClient, verifyDTO, version(addCliente)) 

export default appCliente;