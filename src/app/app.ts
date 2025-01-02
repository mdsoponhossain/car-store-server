import express, { Application } from 'express';
import carController from '../modules/car/car.controller';
const app: Application = express();

// parsers:
app.use(express.json());

// application's routes:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/cars', carController.createCar);
export default app;
