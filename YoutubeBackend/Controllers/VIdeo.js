import Video from "../Models/Videos.js";
import { youtubeDataModel } from "../Models/Youtubedatamodel.js";

// write logic for getting the vides from the backend


export async function getVideos(req, res) {
    const { _id } = req.user; // get the user id from the verification we can save some api calls and again findig the user in collection;



    try {
        const videos = await Video.find({ user_id: _id });

        if (videos) {
            return res.status(200).json({ message: "Videos fetched successfully", videos });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}

export async function postVideo(req, res) {
    const { _id } = req.user;

    const { title, description, videoUrl, imageIcon } = req.body;

    const isChannelExist = await Channel.findOne({ user_id: _id });

    try {
        
    if (isChannelExist) {
        const video = new Video({
            title,
            description,
            videoUrl,
            imageIcon,
            user_id: _id
        })

        const savedVideo = await video.save();


        if (savedVideo) {
            const youtubeData = await youtubeDataModel.findOneAndUpdate({ user_id: _id },
                {
                    $push: {
                        youtubeUpload: savedVideo._id
                    }
                },
                {
                    new: true,
                    upsert: true
                });

            await youtubeData.populate('Video' , 'title description videoUrl imageIcon user_id time')

            return res.status(200).json({ message: "Video saved successfully", savedVideo });
        }else {
            return res.status(404).json({ message: "Video not saved" });
        }

        
    }
    }catch (err) {
        return res.status(500).json({ message: "Server Error" });
    }




}