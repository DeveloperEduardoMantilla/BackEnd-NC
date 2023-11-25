import express  from 'express';
import dotenv from 'dotenv';
import router from "./src/router/router.js";
let app = express();
app.use(express.json());
dotenv.config();

app.use(router)

let server = JSON.parse(process.env.MY_SERVER);
app.listen(server,()=>{
    console.log(`http://${server.hostname}:${server.port}`);
})