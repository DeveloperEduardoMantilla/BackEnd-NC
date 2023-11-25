import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDatabase(){
    try{
        let config = JSON.parse(process.env.MY_CONFIG);
        const conex = mysql.createPool(config);
        return conex;
    }catch(e){
        console.log(`Error connecting to database: ${e.message}`);
    }
}