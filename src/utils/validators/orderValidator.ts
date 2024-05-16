import { body } from 'express-validator';

export const orderValidationRules = [
  body('farmerId').notEmpty().withMessage('Farmer ID is required'),
  // Add more validation rules for order fields as needed
];