import express from 'express';
import FarmerController from '../controllers/FarmerController';
import { farmerValidationRules } from '../utils/validators/farmerValidator';

const router = express.Router();
const farmerController = new FarmerController();


router.post('/', farmerValidationRules, farmerController.createFarmer);
router.get('/:id', farmerController.getFarmerById);

router.get('/', farmerController.getAllFarmers);

router.put('/:id', farmerController.updateFarmer);

router.delete('/:id', farmerController.deleteFarmer);

export default router;