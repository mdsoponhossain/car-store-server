import express from 'express';
import carController from './car.controller';
const carRouter = express.Router();

// Get all cars.
carRouter.get('/', carController.getAllCars);
// Get a car.
carRouter.get('/:carId', carController.getACars);
// Post a Car.
carRouter.post('/', carController.createCar);
// Update a Car.
carRouter.put('/:carId', carController.updateACar);

export default carRouter;
