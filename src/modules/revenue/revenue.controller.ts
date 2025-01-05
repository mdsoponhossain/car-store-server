import { Request, Response } from 'express';
import { Order } from '../order/corder.model';

const getAllRevenue = async (req: Request, res: Response) => {
  // Total revenue calculated from all orders
  const totalRevenue = await Order.aggregate([
    {
      $addFields: { netPrice: { $multiply: ['$quantity', '$totalPrice'] } },
    },
    {
      $group: { _id: null, totalRevenue: { $sum: '$netPrice' } },
    },
  ]);

  res.json({
    message: 'Revenue calculated successfully',
    status: true,
    data: {
      totalRevenue: totalRevenue[0]?.totalRevenue,
    },
  });
};

const revenueController = {
  getAllRevenue,
};

export default revenueController;
