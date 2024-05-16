import { Request, Response } from 'express';
import Fertilizer from '../models/Fertilizer';

export default class FertilizerController {
  public async createFertilizer(req: Request, res: Response): Promise<void> {
    try {
      const { name, description, price, quantity } = req.body;
      const fertilizer = await Fertilizer.create({ name, description, price, quantity });
      res.status(201).json(fertilizer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getFertilizerById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const fertilizer = await Fertilizer.findByPk(id);
      if (!fertilizer) {
        res.status(404).json({ error: 'Fertilizer not found' });
        return;
      }
      res.status(200).json(fertilizer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Add more controller methods as needed
}