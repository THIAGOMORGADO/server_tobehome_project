import express, { Request,Response } from 'express';
import routes from './routes';
import cors from 'cors';
import { AuthMiddleware } from './middlewares/auth.middleware';
import prisma from './database';
import {config} from 'dotenv';

config()

const app = express();

app.use(cors({
    origin: process.env.CLIENT_HOST
}))
app.use(express.json());
app.use(AuthMiddleware.Init)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})
app.use(routes);




export default app;



