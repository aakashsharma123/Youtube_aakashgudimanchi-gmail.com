import express from 'express';
const app = express();
import db from './db.js';
import { YoutubeDataRoutes } from './Routes/youtube_data.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './Routes/AuthUser.js';
import commentRoutes from './Routes/Commetns.js';
import ChannelRoutes from './Routes/Channel.js';
import VideoRoutes from './Routes/Videos.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));

app.use('/auth', router);
YoutubeDataRoutes(app);
commentRoutes(app);
ChannelRoutes(app);
VideoRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});