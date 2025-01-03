import {videoModel} from '../Models/Videos.js';
import {youtubeDataModel} from '../Models/Youtubedatamodel.js';


export const getVideos = async (req, res) => {
    const {_id} = req.user;
    
    try {
        const videos = await videoModel.find({user_id : _id});

        if (videos) {
            return res.status(200).json({message : "videos fetched" , videos});
        }
    }catch (err) {
        return res.status(500).json({message : "internal server issue"});
    }


}

export const PostVideo = async (req, res) => {
    const { _id, name } = req.user;
    const { description, video_url, imageIcon, category } = req.body;
    
    try {
        const video = new videoModel({
            imageIcon,
            video_url,
            description,
            owner: name,
            genre: category,
            user_id : _id
        });

        const uploadVideo = await video.save();

        if (uploadVideo) {
            await youtubeDataModel.insertMany ([video])

            return res.status(201).json({message : "video uploaded" , uploadVideo});
        }else {
            return res.status(404).json({message : "something is wrong"})
        }
    } catch (err) {
        console.error("Error occurred while saving video: ", err);
        
        return res.status(500).json({message : "internal problem"});
    }
}

export const editVideo = async (req, res) => {
    const {_id , name} = req.user;

    const { description, video_url, imageIcon, category } = req.body;

    try {
        

        if (video) {
           const updateVideo =  await videoModel.findByIdAndUpdate (
                {user_id : _id} , 

                {$set : {imageIcon , video_url , description , owner , genre }},

                {new : true}
            )

            await youtubeDataModel.findByIdAndUpdate (
                {user_id : _id},
                {$set : { description , video_url , imageIcon , category}}
            )


            return res.status(201).json({message : "video uploaded" , updateVideo});
        }

    }
    catch (err) {
        return res.status (500).json({message : "internal server problem"});
    }

}

export const deleteVideo = async (req, res) => {
    
    const {_id} = req.user

    try {
        await videoModel.deleteOne ({
            user_id : _id
        })
        await youtubeDataModel.deleteOne ({
            user_id : _id
        })

        return res.status(200).json({message : "deleted successfully"})
    }catch (err) {
        console.log(err);
        
        return res.status(500).json({message : " internal server problem" })
    }
}