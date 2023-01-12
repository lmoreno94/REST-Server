import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use( express.static('public') );

app.listen(3000);

console.log('Hello Word Tsc la pdduta quefsdf lo pario doooooadas')