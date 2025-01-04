import { Request, Response } from 'express';
import { Order } from '../order/corder.model';

const getAllRevenue = async (req: Request, res: Response) => {
  const totalRevenue = await Order.aggregate([{ $match: {} }]);
  console.log(totalRevenue);
  res.json(totalRevenue);
};

const revenueController = {
  getAllRevenue,
};

export default revenueController;
