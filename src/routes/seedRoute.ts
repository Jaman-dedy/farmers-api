import express from 'express';
import SeedController from '../controllers/SeedController';
import { seedValidationRules } from '../utils/validators/seedValidator';

const router = express.Router();
const seedController = new SeedController();

router.post('/', seedValidationRules, seedController.createSeed);
// router.get('/:id', seedController.getSeeds);
router.get('/', seedController.getSeeds);

export default router;