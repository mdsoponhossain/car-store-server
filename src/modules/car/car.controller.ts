import { Request, Response } from 'express';
import { Car } from './car.model';

// create car:
const createCar = async (req: Request, res: Response) => {
  try {
    const result = await new Car(req.body).save();
    res.status(200).json({
      success: true,
      message: 'Car is added in db successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Car is failed to add in db.',
      error: (error as { message: string }).message,
    });
  }
};

const carController = {
  createCar,
};
export default carController;
