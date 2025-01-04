import express from 'express';
import revenueController from './revenue.controller';
const revenueRouter = express.Router();

revenueRouter.get('/', revenueController.getAllRevenue);

export default revenueRouter;
