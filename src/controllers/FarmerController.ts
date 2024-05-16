import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import Farmer from '../models/Farmer';
import { getSortOrder } from '../helper/sort';
import { farmerValidationRules } from '../utils/validators/farmerValidator';

export default class FarmerController {

  public async createFarmer(req: Request, res: Response): Promise<void> {
    try {
      await Promise.all(farmerValidationRules.map((rule) => rule.run(req)));
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
  
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

  public async getAllFarmers(req: Request, res: Response): Promise<void> {
    try {
      const { page = 1, pageSize = 10, sortBy = 'name', sortOrder = 'ASC' } = req.query;
      const offset = (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10);
      const limit = parseInt(pageSize as string, 10);
      const order = [[sortBy as string, getSortOrder(sortOrder)]];
  
      const { count, rows } = await Farmer.findAndCountAll({
        offset,
        limit,
        // order,
      });
  
      res.status(200).json({
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page as string, 10),
        pageSize: limit,
        data: rows,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async updateFarmer(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, phone, address } = req.body;
  
      const farmer = await Farmer.findByPk(id);
      if (!farmer) {
        res.status(404).json({ error: 'Farmer not found' });
        return;
      }
  
      farmer.name = name || farmer.name;
      farmer.email = email || farmer.email;
      farmer.phone = phone || farmer.phone;
      farmer.address = address || farmer.address;
  
      await farmer.save();
  
      res.status(200).json(farmer);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async deleteFarmer(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
  
      const farmer = await Farmer.findByPk(id);
      if (!farmer) {
        res.status(404).json({ error: 'Farmer not found' });
        return;
      }
  
      await farmer.destroy();
  
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}