import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'youtubeData'
    },
    description: { type: String, required: true },
    video_url: {
        type: String,
        required: true,
    },
    imageIcon: { type: String, required: true },
    owner: { type: String },
    genre: { type: String },
    views: { type: String, default: "15k" },
    time: { type: String, default: "1 year ago" },
    subscription: { type: String, default: "Free" }
});



export const videoModel = mongoose.model("video", videoSchema);