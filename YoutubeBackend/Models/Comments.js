import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'youtubeData' },
    messageComment: { type: String, required: true },
}, { timestamps: true });

const Comment = mongoose.model('comments', commentSchema);
export default Comment;