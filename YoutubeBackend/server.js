import express from 'express';
const app = express ();
import db from './db.js';
import { YoutubeDataRoutes } from './Routes/youtube_data.js';
import bodyParser from 'body-parser';
import cros from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import router from '../YoutubeBackend/Routes/AuthUser.js'
import commentRoutes from './Routes/Commetns.js';
import ChannelRoutes from './Routes/Channel.js';
import VideoRoutes from './Routes/Videos.js';

app.use(express.json());
app.use(express.urlencoded ({extended : true}))
app.use(bodyParser.json());
app.use (cros())

app.use ('/auth' , router);
YoutubeDataRoutes(app)
commentRoutes(app)
ChannelRoutes(app)
VideoRoutes(app);

const port = process.env.port || 3000

app.listen (port , () => {
    console.log ("server is listening to port : 3000")
})