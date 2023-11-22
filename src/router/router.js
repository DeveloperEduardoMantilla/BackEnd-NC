import express  from 'express';
import {limitApi} from "../limits/limit.js";
import appCliente from "./cliente.router.js";

let appRouter = express();

appRouter.use(limitApi());
appRouter.use(appCliente);

appRouter.get('/',(req, res) => {
    res.send({message:`Welcome to NC`});
})
export default appRouter;
