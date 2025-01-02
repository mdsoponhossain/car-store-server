import express from 'express';
import carController from './car.controller';
const carRouter = express.Router();

carRouter.post('/', carController.createCar);

export default carRouter;
