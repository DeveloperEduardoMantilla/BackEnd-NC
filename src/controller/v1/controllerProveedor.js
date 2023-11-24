import connectToDatabase from "../../config/connection.js";

const database = await connectToDatabase();

const getSupplier = async(req,res)=>{
    try{
        database.query("SELECT * FROM PROVEEDOR", (err,data,fil)=>{
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

const postSupplier = async(req,res)=>{
    try{
        let { nombre, telefono, descripcion } = req.body;
        database.query("INSERT INTO PROVEEDOR (nombre,telefono, descripcion) VALUES (?,?,?)", 
        [nombre, telefono, descripcion],
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

const deleteSupplier = async(req,res)=>{
    try{
        let {id} = req.params;
        id = parseInt(id);
        database.query("DELETE FROM PROVEEDOR WHERE id = ?", 
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

const updateSupplier = async(req,res)=>{
    try{
        let {id,nombre,telefono, descripcion} = req.body;
        if(id!=null && !isNaN(id)){
            id = parseInt(id);
            database.query("UPDATE PROVEEDOR SET nombre=?,telefono=?,descripcion=? WHERE id=?", 
            [nombre,telefono, descripcion,id],
            (err,data,fil)=>{
                if(err){
                    res.send(err.message)
                }
                res.send(JSON.stringify(data))
            })
        }else{
            res.send({message:'Se necesita de un id para la actualizacion del proveedor'})
        }
        
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

export {getSupplier, postSupplier, deleteSupplier, updateSupplier};
