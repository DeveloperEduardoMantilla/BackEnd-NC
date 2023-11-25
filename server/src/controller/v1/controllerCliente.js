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
        res.status(500).send({"message:": "Error en el servidor"});
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
        res.status(500).send({"message:": "Error en el servidor"});
    }
}

const deleteClient = async(req,res)=>{
    try{
        let {id} = req.params;
        id = parseInt(id);
        database.query("DELETE FROM CLIENTE WHERE id = ?", 
        [id],
        (err,data,fil)=>{
            if(err){
                res.send(err.message)
            }
            res.send(JSON.stringify(data))
        })
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

const updateClient = async(req,res)=>{
    try{
        let {id,nombre,telefono,comoLlego, descripcion} = req.body;
        if(id!=null && !isNaN(id)){
            id = parseInt(id);
            database.query("UPDATE CLIENTE SET nombre=?,telefono=?,comoLlego=?,descripcion=? WHERE id=?", 
            [nombre,telefono,comoLlego, descripcion,id],
            (err,data,fil)=>{
                if(err){
                    res.send(err.message)
                }
                res.send(JSON.stringify(data))
            })
        }else{
            res.send({message:'Se necesita de un id para la actualizacion del cliente'})
        }
        
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

export {getClient, postClient, deleteClient, updateClient};
