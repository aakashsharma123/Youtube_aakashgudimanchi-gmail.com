import { addComment , getComment , deleteComment , updateComment} from "../Controllers/CommentController.js";
import { Auth } from "../Middlewares/Auth.js";
// Auth
export function commentRoutes (app) {
    app.post ('/addcomment', Auth , addComment)
    app.get ('/getcomments/:id' ,Auth ,getComment )
    app.put ('/updatecomment/:id' , updateComment)
    app.delete ('/deletecomment/:id' , deleteComment);
}

export default commentRoutes