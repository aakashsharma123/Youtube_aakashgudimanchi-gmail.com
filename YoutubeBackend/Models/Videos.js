import mongoose, { Mongoose } from 'mongoose';

const videoSchema = new mongoose.Schema({
   title : {type : String , required : true},
   description : {type : String , required : true},
   videoUrl : {type : String , required : true},    
   imageIcon : {type : String , required : true},
   user_id : {type : Mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
   time : {type : Date , default : Date.now}
});

const Video = mongoose.model('Video', videoSchema);

export default Video;

