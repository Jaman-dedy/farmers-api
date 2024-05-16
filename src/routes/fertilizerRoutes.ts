import express from 'express';
import FertilizerController from '../controllers/FertilizerController';
import { fertilizerValidationRules } from '../utils/validators/fertilizerValidator';

const router = express.Router();
const fertilizerController = new FertilizerController();

router.post('/', fertilizerValidationRules, fertilizerController.createFertilizer);

router.get('/:id', fertilizerController.getFertilizerById);

router.get('/', fertilizerController.getFertilizers);

export default router;