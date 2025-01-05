import User from "../Models/User.js";
import {Channel} from "../Models/Channel.js";
// import {youtubeDataModel} from '../Models/Youtubedatamodel.js'


export const PostChannel = async (req, res) => {
    
    const {channelName , channelLogo , channelBanner , channelDescription} = req.body;
    const {_id} = req.user


    try {
        const user = await User.findOne({_id})
        const channelid = await Channel.findOne({user_id : _id})

        if (channelid) {
            return res.status(404).json({message : "you cannot create more than one Channel"})
        }else {

            const channel = new Channel ({
                user_id  : _id,
                channelName,
                channelLogo,
                channelBanner,
                channelDescription
            })

            
    
            const createdChannel = await channel.save();
            
            if (createdChannel) {
                return res.status(201).json({message : "channel created" , createdChannel});
            }
        }
     

    }catch(err) {
        return res.status(404).json({message : "channel  not created" , err });

    } 

  
}

export const getChannel  = async (req , res) => {
    const {_id} = req.user;

    // console.log(_id);
    
    try {
        const unqiuechannel = await Channel.findOne({user_id : _id});
        
        
        if (unqiuechannel) {
            return res.status(200).json({message : "channel is " , unqiuechannel} )
        }
    }catch(err){    
        return res.status(404).json({message : "channel is not created by the user " , err })
    }
}
