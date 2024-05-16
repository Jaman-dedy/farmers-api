import { Request, Response } from 'express';
import Farmer from '../models/Farmer';

export default class FarmerController {
  public async createFarmer(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, phone, address } = req.body;
      const farmer = await Farmer.create({ name, email, phone, address });
      res.status(201).json(farmer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getFarmerById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const farmer = await Farmer.findByPk(id);
      if (!farmer) {
        res.status(404).json({ error: 'Farmer not found' });
        return;
      }
      res.status(200).json(farmer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Add more controller methods as needed
}