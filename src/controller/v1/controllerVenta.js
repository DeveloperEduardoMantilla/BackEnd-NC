import connectToDatabase from "../../config/connection.js";

const database = await connectToDatabase();

const getVenta = async(req,res)=>{
    try{
        database.query("SELECT * FROM VENTA", (err,data,fil)=>{
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

const postVenta = async(req,res)=>{
    try{
        let { idCliente,perfil,contraseniaPerfil,idCuenta,idVendedor,tiempo,fechaCompra,fechaCorte,costo,pago,descripcion,cantRenovacion,estadoVenta } = req.body;
        database.query("INSERT INTO VENTA (idCliente,perfil, contraseniaPerfil, idCuenta, idVendedor, tiempo, fechaCompra, fechaCorte, costo, pago, descripcion, cantRenovacion, estadoVenta) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [idCliente,perfil,contraseniaPerfil,idCuenta,idVendedor,tiempo,fechaCompra,fechaCorte,costo,pago,descripcion,cantRenovacion,estadoVenta],
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

const deleteVent = async(req,res)=>{
    try{
        let {id} = req.params;
        id = parseInt(id);
        database.query("DELETE FROM VENTA WHERE id = ?", 
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

const updateVenta = async(req,res)=>{
    try{
        let {idCliente,perfil,contraseniaPerfil,idCuenta,idVendedor,tiempo,fechaCompra,fechaCorte,costo,pago,descripcion,cantRenovacion,estadoVenta,id} = req.body;
        if(id!=null && !isNaN(id)){
            id = parseInt(id);
            database.query("UPDATE VENTA SET idCliente=?,perfil=?,contraseniaPerfil=?,idCuenta=?,idVendedor=?,tiempo=?,fechaCompra=?,fechaCorte=?,costo=?,pago=?,descripcion=?,cantRenovacion=?,estadoVenta=? WHERE id=?", 
            [idCliente,perfil,contraseniaPerfil,idCuenta,idVendedor,tiempo,fechaCompra,fechaCorte,costo,pago,descripcion,cantRenovacion,estadoVenta,id],
            (err,data,fil)=>{
                if(err){
                    res.send(err.message)
                }
                res.send(JSON.stringify(data))
            })
        }else{
            res.send({message:'Se necesita de un id para la actualizacion de la venta'})
        }
        
    }catch(e){
        console.log(`Error en la conexión con la base de datos => ${e.message}`);
        res.status(500).send({"message:": "Error en el servidor"});
    }
} 

export {getVenta, postVenta, deleteVent, updateVenta};
