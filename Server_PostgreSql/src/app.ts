import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use( express.static('public') );

export default app;