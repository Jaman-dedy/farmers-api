import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import OrderItem from '../models/OrderItem';
import { orderItemValidationRules } from '../utils/validators/orderItemValidator';

export default class OrderItemController {
  public async createOrderItem(req: Request, res: Response): Promise<Response> {
    try {
      await Promise.all(orderItemValidationRules.map((rule) => rule.run(req)));
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { orderId, seedId, quantity } = req.body;

      const orderItem = await OrderItem.create({ orderId, seedId, quantity });

      return res.status(201).json(orderItem);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Implement other methods like getOrderItemById, getOrderItems, updateOrderItem, deleteOrderItem
}