import { getYoutubeData , postYoutubeData } from "../Controllers/youtubeData.js";

export function YoutubeDataRoutes (app) {
    app.get ('/',getYoutubeData),
    app.post ('/post' , postYoutubeData)
}
