import { getYoutubeData , postYoutubeData , UpdateYoutubeData } from "../Controllers/youtubeData.js";
import { Auth } from "../Middlewares/Auth.js";


export function YoutubeDataRoutes (app) {
    app.get ('/', getYoutubeData),
    app.post ('/post', postYoutubeData)
    app.post ('/update' ,UpdateYoutubeData)
}
