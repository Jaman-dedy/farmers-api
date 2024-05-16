import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import Fertilizer from '../models/Fertilizer';
import Seed from '../models/Seed';
import { orderValidationRules } from '../utils/validators/orderValidator';
import { getSortOrder } from '../helper/sort';

export default class OrderController {
  public async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      await Promise.all(orderValidationRules.map((rule) => rule.run(req)));
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { farmerId, landSize, orderItems } = req.body;

      // Calculate the total quantity of fertilizers and seeds based on the land size
      const fertilizerQuantity = Math.min(landSize * 2, 3); // Maximum of 3kg per 1 acre
      const seedQuantity = Math.min(landSize, 1); // Maximum of 1kg per 1 acre

      // Create the order
      const order = await Order.create({
        farmerId,
        landSize,
        fertilizerQuantity,
        seedQuantity,
        status: 'pending',
      });

      // Create the order items
      const orderItemsData = await Promise.all(
        orderItems.map(async (item: any) => {
          const { fertilizerId, seedId } = item;

          // Find the associated fertilizer and seed
          const fertilizer = await Fertilizer.findByPk(fertilizerId);
          const seed = await Seed.findByPk(seedId);

          // Calculate the quantity based on the land size
          const fertilizerQuantity = Math.min(landSize * 2, fertilizer?.quantity || 0);
          const seedQuantity = Math.min(landSize, seed?.quantity || 0);

          return {
            orderId: order.id,
            fertilizerId,
            seedId,
            fertilizerQuantity,
            seedQuantity,
          };
        })
      );

      await OrderItem.bulkCreate(orderItemsData);

      return res.status(201).json({ order, orderItems: orderItemsData });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getOrderById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id, {
        include: [
          {
            model: OrderItem,
            include: [Fertilizer, Seed],
          },
        ],
      });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getOrders(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, pageSize = 5, sortBy = 'createdAt', sortOrder = 'DESC', status } = req.query;
      const offset = (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10);
      const limit = parseInt(pageSize as string, 10);
      const order: [string, string][] = [[sortBy as string, getSortOrder(sortOrder)]];

      const where = status ? { status } : {};

      const { count, rows } = await Order.findAndCountAll({
        offset,
        limit,
        order,
        where,
        include: [
          {
            model: OrderItem,
            include: [Fertilizer, Seed],
          },
        ],
      });

      return res.status(200).json({
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page as string, 10),
        pageSize: limit,
        data: rows,
      });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updateOrderStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      order.status = status;
      await order.save();

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}