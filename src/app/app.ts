import express, { Application } from 'express';
import carRouter from '../modules/car/car.route';
import orderRouter from '../modules/order/order.route';
import revenueRouter from '../modules/revenue/revenue.route';
const app: Application = express();

// parsers:
app.use(express.json());

// application's routes:
app.get('/', (req, res) => {
  res.send('Car store server is running!');
});

app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orders/revenue', revenueRouter);
export default app;
