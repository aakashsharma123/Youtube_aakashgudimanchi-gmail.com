import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema ({
    
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required  :true,
        ref : 'users'
    },

    channelName : {
        type : String,
        required : true
    },


    channelLogo : {
        type : String,
        required : true
    },

    
    channelBanner : {
        type : String,
        required : true
    },


    channelDescription : {
        type : String,
        required : true
    }
    
}, {timestamps : true});

export const Channel = mongoose.model ('channel' , ChannelSchema);



