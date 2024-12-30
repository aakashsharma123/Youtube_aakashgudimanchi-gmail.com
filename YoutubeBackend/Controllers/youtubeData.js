import mongoose from "mongoose";
import { youtubeDataModel } from "../Models/Youtubedatamodel.js";
import User from "../Models/User.js";

export const getYoutubeData = async (req, res) => {
    try {
        const youtubeData = await youtubeDataModel.find();
            res.status(200).json(youtubeData);
    } catch (err) {
        res.status(500).json({ message: "error occurred while retrieving data" });
    }
}

export async function  postYoutubeData  (req , res)  {
    const { imageIcon, video_url, description, owner, views, time, genre, subscription } = req.body;

    try {
        const newData = new youtubeDataModel({
            imageIcon : req.body.imageIcon , video_url , description ,owner , views , time , genre , subscription
        })

        const saveData  = await newData.save ();

        saveData && res.status (200).json ({message : "data added successfully"})

    }catch (err) {
            res.status (404).json ({message : 'something went wrong'})
    }
}

export async function UpdateYoutubeData (req , res) {

    try {
        const updateData = await youtubeDataModel.updateMany ({} , {$unset : {comment_id : ""}})
        return res.status(200).json({message : "updated"})
    }catch (err) {
        console.log(err);
        
        return res.status(500).json({message : "internal problem"})
    }
}
