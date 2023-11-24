import connectToDatabase from "../../config/connection.js";

const database = await connectToDatabase();

const getAccount = async(req,res)=>{
    try{
        database.query("SELECT * FROM CUENTA", (err,data,fil)=>{
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

const postAccount = async(req,res)=>{

    try{
        let {idServicio,correo,contrasenia,fechaCompra,fechaPago,idProveedor,descripcion  } = req.body;
        database.query("INSERT INTO CUENTA (idServicio,correo,contrasenia,fechaCompra,fechaPago,idProveedor,descripcion) VALUES (?,?,?,?,?,?,?)", 
        [idServicio,correo,contrasenia,fechaCompra,fechaPago,idProveedor,descripcion],
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

const deleteAccount = async(req,res)=>{
    try{
        let {id} = req.params;
        id = parseInt(id);
        database.query("DELETE FROM CUENTA WHERE id = ?", 
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

const updateAccount = async(req,res)=>{
    try{
        let {idServicio,correo,contrasenia,fechaCompra,fechaPago,idProveedor,descripcion,id} = req.body;
        if(id!=null && !isNaN(id)){
            id = parseInt(id);
            database.query("UPDATE CUENTA SET idServicio=?,correo=?,contrasenia=?,fechaCompra=?,fechaPago=?,idProveedor=?,descripcion=? WHERE id=?", 
            [idServicio,correo,contrasenia,fechaCompra,fechaPago,idProveedor,descripcion,id],
            (err,data,fil)=>{
                if(err){
                    res.send(err.message)
                }
                res.send(JSON.stringify(data))
            })
        }else{
            res.send({message:'Se necesita de un id para la actualizacion de la cuenta'})
        }
        
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

export {getAccount, postAccount, deleteAccount, updateAccount};
