import express from 'express';
const app = express ();
import db from './db.js';
import { YoutubeDataRoutes } from './Routes/youtube_data.js';
import bodyParser from 'body-parser';
import cros from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import router from '../YoutubeBackend/Routes/AuthUser.js'



app.use(express.json());
app.use(express.urlencoded ({extended : true}))
app.use(bodyParser.json());
app.use (cros())
app.use ('/auth' , router)

YoutubeDataRoutes(app)

const port = process.env.port

app.listen (port , () => {
    console.log ("server is listening to port : 3000")
})