import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  email: String,
  car: String,
  quantity: Number,
  totalPrice: Number,
});

export const Order = model<TOrder>('Order', orderSchema);
