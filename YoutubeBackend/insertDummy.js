import mongoose from "mongoose";
import dotenv from "dotenv";
import {DummyData} from "./dummyData.js"; 
import { youtubeDataModel } from "./Models/Youtubedatamodel.js";

dotenv.config();

// 1️⃣ CONNECT TO MONGO
async function connectDB() {
    try {
        const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://aakashgudimanchi:Aakash1234@cluster0.nluzkqk.mongodb.net/youtube";
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed", error);
        process.exit(1);
    }
}

// 2️⃣ INSERT DUMMY DATA
async function insertData() {
    try {
        await connectDB();

        // Clear old data if you want (optional)
        // await youtubeDataModel.deleteMany({});

        await youtubeDataModel.insertMany(DummyData);

        console.log("🎉 Dummy Data Inserted Successfully!");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error inserting data:", err);
        process.exit(1);
    }
}

insertData();
