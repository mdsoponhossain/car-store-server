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
      min: [0, 'Price must be a positive number'],
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
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false },
);

// middleware for handling api operation:

// eslint-disable-next-line @typescript-eslint/no-explicit-any
carSchema.pre('find', function (this: any, next: NextFunction) {
  this.where({ isDeleted: false }).select({ isDeleted: 0 });
  next();
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
carSchema.pre('findOne', function (this: any, next: NextFunction) {
  this.where({ isDeleted: false }).select({ isDeleted: 0 });
  next();
});
// car model:
export const Car = model<TCar>('Car', carSchema);
