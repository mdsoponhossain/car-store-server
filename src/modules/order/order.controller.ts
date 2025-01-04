import { Request, Response } from 'express';
import { Order } from './corder.model';

// create an order:
const createAnOrder = async (req: Request, res: Response) => {
  try {
    const result = await new Order(req.body).save();
    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Order is failed to  placed.',
      data: error,
    });
  }
};

const orderController = {
  createAnOrder,
};

export default orderController;
