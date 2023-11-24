import express  from 'express';
import {limitApi} from "../limits/limit.js";
import appCliente from "./cliente.router.js";
import appVenta from "./venta.router.js";
import appVendedor from "./vendedor.router.js";
import appServicio from "./servicio.router.js";
import appCuenta from "./cuenta.router.js";
import appProveedor from "./proveedor.router.js";

let appRouter = express();

appRouter.use(limitApi());
appRouter.use(appCliente);
appRouter.use(appVenta);
appRouter.use(appVendedor);
appRouter.use(appServicio);
appRouter.use(appCuenta);
appRouter.use(appProveedor);

appRouter.get('/',(req, res) => {
    res.send({message:`Welcome to NC`});
})
export default appRouter;
