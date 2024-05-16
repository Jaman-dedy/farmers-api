import express from 'express';
import FertilizerController from '../controllers/FertilizerController';

const router = express.Router();
const fertilizerController = new FertilizerController();

router.post('/', fertilizerController.createFertilizer);
router.get('/:id', fertilizerController.getFertilizerById);
// To do Add more routes as needed

export default router;