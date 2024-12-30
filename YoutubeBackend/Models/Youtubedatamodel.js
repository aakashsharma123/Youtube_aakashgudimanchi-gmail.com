import mongoose from "mongoose";


const youtubeDataSchema = new mongoose.Schema({
    imageIcon: { type: String, required: true },
    video_url: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    views: { type: String, required: true },
    time: { type: String, required: true },
    genre: { type: String, required: true },
    subscription: { type: String, required: true },
})

export const youtubeDataModel = mongoose.model("youtubeData", youtubeDataSchema);
