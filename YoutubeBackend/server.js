import express from 'express';
const app = express ();
import db from './db.js';
import { YoutubeDataRoutes } from './Routes/youtube_data.js';
import bodyParser from 'body-parser';
import cros from 'cors'


app.use(express.json());
app.use(express.urlencoded ({extended : true}))
app.use(bodyParser.json());
app.use (cros())

YoutubeDataRoutes(app)

app.listen (3000 , () => {
    console.log ("server is listening to port : 3000")
})