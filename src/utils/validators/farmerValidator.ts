import { body } from 'express-validator';
import Farmer from '../../models/Farmer';

export const farmerValidationRules = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 1 }).withMessage('Name cannot be just whitespace')
    .trim(), 
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    .custom(async (value) => {
      const existingFarmer = await Farmer.findOne({ where: { email: value } });
      if (existingFarmer) {
        return Promise.reject('Email already exists');
      }
    }),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('address').notEmpty().withMessage('Address is required'),
];