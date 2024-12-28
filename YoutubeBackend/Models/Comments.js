import mongoose from 'mongoose';


const CommentSchema = new mongoose.Schema ({
    description : {
        type : String,
        required : true
    },

    
})

const comment = mongoose.model ('comments' , CommentSchema);
export default comment