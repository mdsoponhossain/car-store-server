import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
// import { carValidationSchema } from './car.validation';
import { Car } from './car.model';

// get all car:
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await Car.find();
    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to load all car data.',
      error: (error as { message: string }).message,
    });
  }
};

// get all car:
const getACars = async (req: Request, res: Response) => {
  try {
    const result = await Car.findOne({ _id: new ObjectId(req.params.carId) });
    res.status(200).json({
      success: true,
      message: 'A car loaded successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to load a car data.',
      error: (error as { message: string }).message,
    });
  }
};

// create car:
const createCar = async (req: Request, res: Response) => {
  try {
    // const validCarData = carValidationSchema.parse(req.body);
    const result = await new Car(req.body).save();
    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const customError = {
      message: 'Validation failed',
      success: false,
      error: {
        name: error?.errors?.price?.name,
        errors: error?.errors,
        stack: error?.stack ? error?.stack : null,
      },
    };
    res.json({
      ...customError,
    });
  }
};

// update a car:
const updateACar = async (req: Request, res: Response) => {
  try {
    const result = await Car.updateOne(
      { _id: new ObjectId(req.params.carId) },
      { $set: req.body, updatedAt: new Date() },
    );
    res.status(200).json({
      success: true,
      message: 'A car updated successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to update a car data.',
      error: (error as { message: string }).message,
    });
  }
};

// update a car:
const deleteACar = async (req: Request, res: Response) => {
  try {
    const result = await Car.updateOne(
      { _id: new ObjectId(req.params.carId) },
      { $set: { isDeleted: true } },
    );
    res.status(200).json({
      success: true,
      message: 'A car deleted successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to deleted a car data.',
      error: (error as { message: string }).message,
    });
  }
};

const carController = {
  createCar,
  getAllCars,
  getACars,
  updateACar,
  deleteACar,
};
export default carController;
