import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { corsOptions } from "@/config/cors";
import routerV1 from "@/routes/routerV1";

const app = express()
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use('/api/v1',routerV1)

export default app