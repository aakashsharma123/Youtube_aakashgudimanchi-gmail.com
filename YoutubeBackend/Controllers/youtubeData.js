import { youtubeDataModel } from "../Models/Youtubedatamodel.js";

export const getYoutubeData = async (req, res) => {
    try {
        const youtubeData = await youtubeDataModel.find();

        res.status(200).json(youtubeData );

    } catch (err) {
        res.status(500).json({ message: "error occured while retreving data" });
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