import express, { Application } from 'express';
import carController from '../modules/car/car.controller';
import carRouter from '../modules/car/car.route';
const app: Application = express();

// parsers:
app.use(express.json());

// application's routes:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/cars', carRouter);
export default app;
