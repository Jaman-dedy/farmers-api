// fertilizerValidator.ts
import { body } from 'express-validator';

export const fertilizerValidationRules = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 1 }).withMessage('Name cannot be just whitespace')
    .trim(),
  body('description')
    .notEmpty().withMessage('Description is required')
    .isLength({ min: 1 }).withMessage('Description cannot be just whitespace')
    .trim(),
  body('price')
    .notEmpty().withMessage('Price is required')
    .isNumeric().withMessage('Price must be a number'),
  body('quantity')
    .notEmpty().withMessage('Quantity is required')
    .isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
];