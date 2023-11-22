import connectToDatabase from "../../config/connection.js";

const database = await connectToDatabase();

const getClient = async(req,res)=>{
    try{
        database.query("SELECT * FROM CLIENTE", (err,data,fil)=>{
            if(err){
                res.send(err.message)
            }
            res.send(JSON.stringify(data))
        })
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send('Error en el servidor');
    }
} 

const postClient = async(req,res)=>{
    try{
        let { nombre, telefono, comoLlego, descripcion } = req.body;
        database.query("INSERT INTO CLIENTE (nombre,telefono, comoLlego, descripcion) VALUES (?,?,?,?)", 
        [nombre, telefono, comoLlego, descripcion],
        (err,data,fil)=>{
            if(err){
                res.send(err.message)
            }
            res.send(JSON.stringify(data))
        })
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send('Error en el servidor');
    }
} 

export {getClient, postClient};
