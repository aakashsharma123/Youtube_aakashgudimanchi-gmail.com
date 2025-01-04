import Comment from '../Models/Comments.js'
import User from "../Models/User.js";
import { youtubeDataModel } from '../Models/Youtubedatamodel.js';

export const addComment = async (req, res) => {
    const { messageComment, id } = req.body; //comment , video id
    const { _id, name, email } = req.user; //user details
    try {
        const comment = new Comment({
            user: _id,
            video: id,
            messageComment: messageComment
        })
        const registerComment = (await comment.save())

        registerComment && res.status(201).json({ message: "comment created", registerComment })

    } catch (err) {
        return res.status(404).json({ message: "comment not created", err })
    }
}


export const getComment = async (req, res) => {
    const { id } = req.params

    console.log('video-id', id);


    try {
        const videoComment = await Comment.find({ video: id }).populate('user', 'name email').populate('video', 'imageIcon video_url decription owner views time genre subscription')

        if (videoComment) {
            return res.status(200).json({ message: 'comment retrevied', videoComment })
        }
    } catch (err) {
        return res.status(404).json({ message: "comment not retrevied", err })
    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.params
    // console.log(id);


    try {
        const deleteComment = await Comment.findByIdAndDelete({ _id: id });

        if (deleteComment) {
            return res.status(200).json({ message: "comment has been deleted" })
        }
    } catch (err) {
        return res.status(404).json({ message: "comment has not been deleted", err })
    }
}

export const updateComment = async (req, res) => {

    const { id } = req.params;
    const { editmessage } = req.body

    // console.log('updateComment' , editmessage);
    

    try {
        const updateUser = await Comment.findByIdAndUpdate({ _id: id }, { $set: { messageComment: editmessage } })

        if (updateUser) {
            return res.status(201).json({ message: "updated comment in backend", updateUser })
        }
    }
    catch (err) {
        return res.status(201).json({ message: "updated comment not updated in  backend"})
    }
}