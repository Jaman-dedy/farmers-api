import express from 'express';
import FarmerController from '../controllers/FarmerController';

const router = express.Router();
const farmerController = new FarmerController();

router.post('/', farmerController.createFarmer);
router.get('/:id', farmerController.getFarmerById);
// To do Add more routes as needed

export default router;