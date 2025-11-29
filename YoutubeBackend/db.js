import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || `mongodb+srv://aakashgudimanchi:Aakash1234@cluster0.nluzkqk.mongodb.net/youtube?appName=youtube`;

mongoose.connect(MONGO_URI)

const db = mongoose.connection;

db.on ("connected" , () => {
    console.log("mongoose is connected");
    
})

db.on ("disconnected" , () => {
    console.log('mongoose is not connected');
})

export default db
