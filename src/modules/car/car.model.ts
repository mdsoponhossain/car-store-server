import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';
import { NextFunction } from 'express';

const carSchema = new Schema<TCar>(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false },
);

// middleware for handling api operation:
carSchema.pre('find', async function (next: NextFunction) {
  this.find({ isDeleted: false }).projection({ isDeleted: 0 });
  next();
});

carSchema.pre('findOne', async function (next: NextFunction) {
  this.find({ isDeleted: false }).projection({ isDeleted: 0 });
  next();
});
// car model:
export const Car = model<TCar>('Car', carSchema);
