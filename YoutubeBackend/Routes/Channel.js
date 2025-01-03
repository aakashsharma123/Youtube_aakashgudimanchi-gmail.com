import { getChannel, PostChannel  } from "../Controllers/Channel.js"
import { Auth } from "../Middlewares/Auth.js"

const ChannelRoutes = (app) => {
    app.get ('/channels' ,Auth, getChannel ),
    app.post ('/channel',Auth , PostChannel)
}
export default ChannelRoutes