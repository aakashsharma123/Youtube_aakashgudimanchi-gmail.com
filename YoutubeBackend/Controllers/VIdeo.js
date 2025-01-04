import {Channel} from '../Models/Channel.js';
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

        const channel = await Channel.findOne({user_id : _id});
        

        if (!channel ) {
            return res.status(404).json({message : "channel not there create it first"})
        }else {
            await youtubeDataModel.insertMany ([video])

            return res.status(201).json({message : "video uploaded" , uploadVideo});
        }
    } catch (err) {
        console.error("Error occurred while saving video: ", err);
        
        return res.status(500).json({message : "internal problem"});
    }
}

export const editVideo = async (req, res) => {
    // const {_id , name} = req.user;
    
    const {id} = req.params

    const { description, video_url, imageIcon, category } = req.body;

    const video = await videoModel.findById({_id : id})

    try {
        

        if (video) {
            await videoModel.findByIdAndUpdate (
                {_id : id} , 

                {$set : {imageIcon , video_url , description , genre : category }},

                {new : true , upsert : true}
            )

            await youtubeDataModel.findByIdAndUpdate (
                {_id : id},
                {$set : { description , video_url , imageIcon , genre : category}}
            )


            return res.status(201).json({message : "video uploaded"});
        }

    }
    catch (err) {
        console.log(err);
        
        return res.status (500).json({message : "internal server problem"});
    }

}

export const deleteVideo = async (req, res) => {
    
    const {id} = req.params

    try {
        await videoModel.deleteOne ({
            _id : id
        })
        await youtubeDataModel.findOneAndDelete ({
             _id: id
        })

        return res.status(200).json({message : "deleted successfully"})
    }catch (err) {
        console.log(err);
        
        return res.status(500).json({message : " internal server problem" })
    }
}