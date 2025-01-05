import { Request, Response } from 'express';
import { Order } from './corder.model';
import { Car } from '../car/car.model';
import { ObjectId } from 'mongodb';
import { TCar } from '../car/car.interface';

// create an order:
const createAnOrder = async (req: Request, res: Response) => {
  try {
    let quantity = 0;

    const findTheCar = await Car.findOne({
      _id: new ObjectId(req?.body?.car),
    });
    if (findTheCar) {
      quantity = (findTheCar as TCar)?.quantity - req?.body?.quantity;
    } else {
      throw new Error('Missing or invalid car id');
    }

    const updateTheCar = await Car.updateOne(
      { _id: new ObjectId(req?.body?.car) },
      { $set: { quantity: quantity, updatedAt: new Date() } },
    );
    if (updateTheCar.modifiedCount) {
      const result = await new Order(req.body).save();
      res.status(200).json({
        status: true,
        message: 'Order created successfully',
        data: result,
      });
    } else {
      throw new Error('Something wrong!');
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as { message: string }).message,
      data: {},
    });
  }
};

const orderController = {
  createAnOrder,
};

export default orderController;
