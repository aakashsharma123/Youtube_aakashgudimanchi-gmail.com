import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const password = process.env.mongos_password;

mongoose.connect (`mongodb+srv://aakashgudimanchi:${password}@aakash.ovn2x.mongodb.net/youtube`)

const db = mongoose.connection;

db.on ("connected" , () => {
    console.log("mongoose is connected");
    
})

db.on ("disconnected" , () => {
    console.log('mongoose is not connected');
})

export default db
