import {Auth} from '../Middlewares/Auth.js'
import {PostVideo ,getVideos , deleteVideo , editVideo} from '../Controllers/VIdeo.js';
const VideoRoutes = (app) => {
        app.post ('/video' , Auth , PostVideo ),
        app.get ('/get/video' , Auth ,getVideos ),
        app.delete('/video/delete/:id' , Auth , deleteVideo)
        app.put('/video/edit/:id', editVideo)
};

export default VideoRoutes;