import { body } from 'express-validator';

export const orderItemValidationRules = [
  body('orderId').notEmpty().withMessage('Order ID is required'),
  body('seedId').notEmpty().withMessage('Seed ID is required'),
  body('quantity')
    .notEmpty().withMessage('Quantity is required')
    .isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
  // Add more validation rules for order item fields as needed
];