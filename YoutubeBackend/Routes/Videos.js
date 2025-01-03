import {Auth} from '../Middlewares/Auth.js'
import {PostVideo ,getVideos , deleteVideo} from '../Controllers/Video.js'
const VideoRoutes = (app) => {
        app.post ('/video' , Auth , PostVideo ),
        app.get ('/get/video' , Auth ,getVideos ),
        app.delete('/video/delete' , Auth , deleteVideo)
};

export default VideoRoutes;