import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import authorRootRoute from './app/routes';


//express application type
const app: Application = express();


//middlwares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/api/v1',authorRootRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });
  
 

  export default app;