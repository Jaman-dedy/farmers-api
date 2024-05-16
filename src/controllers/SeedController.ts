import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Op } from 'sequelize';
import Seed from '../models/Seed';
import { seedValidationRules } from '../utils/validators/seedValidator';
import { getSortOrder } from '../helper/sort';

export default class SeedController {
  public async createSeed(req: Request, res: Response): Promise<Response> {
    try {
      await Promise.all(seedValidationRules.map((rule) => rule.run(req)));
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, description, price, quantity } = req.body;

      const seed = await Seed.create({ name, description, price, quantity });

      return res.status(201).json(seed);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getSeeds(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, pageSize = 5, sortBy = 'name', sortOrder = 'ASC' } = req.query;
      const offset = (parseInt(page as string, 10) - 1) * parseInt(pageSize as string, 10);
      const limit = parseInt(pageSize as string, 10);
      const order: [string, string][] = [[sortBy as string, getSortOrder(sortOrder)]];
      const { count, rows } = await Seed.findAndCountAll({
        offset,
        limit,
        order,
        where: {
          name: {
            [Op.iLike]: `%${req.query.search || ''}%`,
          },
        },
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
}