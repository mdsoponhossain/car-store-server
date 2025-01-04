import { z } from 'zod';

export const carValidationSchema = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .number()
    .int()
    .min(1886, 'Year must be at least 1886')
    .max(new Date().getFullYear(), 'Year must be in the current or past year'),
  price: z.number().positive('Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    errorMap: () => ({ message: 'Invalid category' }),
  }),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(0, 'Quantity must be zero or greater'),
  inStock: z.boolean(),
  isDeleted: z.boolean().default(false),
});
