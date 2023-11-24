import connectToDatabase from "../../config/connection.js";

const database = await connectToDatabase();

const getServicio = async(req,res)=>{
    try{
        database.query("SELECT * FROM SERVICIO", (err,data,fil)=>{
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

const postServicio = async(req,res)=>{
    try{
        let {nombre,descripcion} = req.body;
        database.query("INSERT INTO SERVICIO (nombre,descripcion) VALUES (?,?)", 
        [nombre,descripcion],
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

const deleteService = async(req,res)=>{
    try{
        let {id} = req.params;
        id = parseInt(id);
        database.query("DELETE FROM SERVICIO WHERE id = ?", 
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

const updateServicio = async(req,res)=>{
    try{
        let {nombre,descripcion,id} = req.body;
        if(id!=null && !isNaN(id)){
            id = parseInt(id);
            database.query("UPDATE SERVICIO SET nombre=?,descripcion=? WHERE id=?", 
            [nombre,descripcion,id],
            (err,data,fil)=>{
                if(err){
                    res.send(err.message)
                }
                res.send(JSON.stringify(data))
            })
        }else{
            res.send({message:'Se necesita de un id para la actualizacion del servicio'})
        }
        
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

export {getServicio, postServicio, deleteService, updateServicio};
