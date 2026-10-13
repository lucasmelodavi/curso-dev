import { queryObjects } from "node:v8";
import { Client } from "pg";

 async function getNewClient(){
   const client = new Client({
      host:process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user:process.env.POSTGRES_DB,
      database:Process.env.POSTGRES_DB,
      password: process.env.POSTEGRES_PASSWORD,
   });

   await client.connect();
   return client;
 }

 async function query(queryObject){
   let client;

   try{
      client = await getNewClient();
      const result = await client.query(queryObjects);
      return result;
   }catch(error) {
      console.error(error);
      throw error;
   }finally{
      await client?.end();
   }
 }

 const database = {
   query,
   getNewClient,
 };

 export default database;