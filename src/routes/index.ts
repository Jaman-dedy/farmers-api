import express from 'express';
import farmerRoutes from './farmerRoutes';
import fertilizerRoutes from './fertilizerRoutes';
import orderRoutes from './orderRoute';
import seedRoutes from './seedRoute';


const router = express.Router();

router.use('/farmers', farmerRoutes);
router.use('/fertilizers', fertilizerRoutes);
router.use('/order', orderRoutes)
router.use('/seeds', seedRoutes)


export default router;