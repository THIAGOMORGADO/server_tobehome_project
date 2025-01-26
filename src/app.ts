import express from 'express';
import routes from './routes/Router';
import cors from 'cors';



const app = express();

app.use(express.json());
app.use(routes);
app.use(cors())



export default app;



