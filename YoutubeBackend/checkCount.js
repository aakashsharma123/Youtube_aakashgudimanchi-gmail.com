import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://aakashgudimanchi:Aakash1234@cluster0.nluzkqk.mongodb.net/youtube";

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected for count");
    const count = await mongoose.connection.db.collection('youtubedatas').countDocuments();
    console.log("youtubeData documents count:", count);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
