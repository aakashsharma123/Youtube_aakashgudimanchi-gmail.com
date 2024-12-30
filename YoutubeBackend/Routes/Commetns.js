import { addComment , getComment } from "../Controllers/CommentController.js";
import { Auth } from "../Middlewares/Auth.js";

export function commentRoutes (app) {
    app.post ('/addcomment',  Auth , addComment)
    app.get ('/getcomments/:id' , Auth ,getComment )
    app.put ('/updatecomment')
    app.delete ('/deletecomment');
}

export default commentRoutes