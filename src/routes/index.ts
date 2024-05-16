import express from 'express';
import farmerRoutes from './farmerRoutes';
import fertilizerRoutes from './fertilizerRoutes';


const router = express.Router();

router.use('/farmers', farmerRoutes);
router.use('/fertilizers', fertilizerRoutes);


export default router;