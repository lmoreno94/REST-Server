import express from "express";
import morgan from "morgan";
import cors from "cors";
import User from './routes/User';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use( express.static('public') );

app.use(User)

export default app;