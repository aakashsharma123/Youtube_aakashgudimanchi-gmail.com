import mongoose from "mongoose";

mongoose.connect ("mongodb+srv://aakashgudimanchi:aakash2002@aakash.ovn2x.mongodb.net/youtube")

const db = mongoose.connection;

db.on ("connected" , () => {
    console.log("mongoose is connected");
    
})

db.on ("disconnected" , () => {
    console.log('mongoose is not connected');
})

export default db