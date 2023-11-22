import express  from 'express';
import connectToDatabase from "../config/connection.js";
import routesVersioning from "express-routes-versioning";
import { getClientes } from '../support/v1.js';
import {limitApi} from "../limits/limit.js";

const database = await connectToDatabase();
let appRouter = express();
const version = routesVersioning();

appRouter.use(limitApi());
appRouter.get("/clientes", version(getClientes))

appRouter.get('/',(req, res) => {
    res.send({message:`Welcome to NC`});
})



export default appRouter;
