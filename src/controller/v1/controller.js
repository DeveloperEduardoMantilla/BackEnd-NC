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
        console.log(`Error connection database => ${e.message}`);
    }
} 

export {getClient};
