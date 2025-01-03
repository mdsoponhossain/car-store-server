import express, { Application } from 'express';
import carRouter from '../modules/car/car.route';
import orderRouter from '../modules/order/order.route';
const app: Application = express();

// parsers:
app.use(express.json());

// application's routes:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);
export default app;
