import express from 'express';
import OrderController from '../controllers/OrderController';
import { orderValidationRules } from '../utils/validators/orderValidator';

const router = express.Router();
const orderController = new OrderController();

router.post('/', orderValidationRules, orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/', orderController.getOrders);
router.put('/:id/status', orderController.updateOrderStatus);

export default router;