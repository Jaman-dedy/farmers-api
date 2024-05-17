import request from 'supertest';
import express, { Application } from 'express';
import sequelize from '../../src/config/database';
import Farmer from '../models/Farmer';
import FarmerController from '../controllers/FarmerController';

const app: Application = express();
app.use(express.json());

const farmerController = new FarmerController();
app.post('/farmers', farmerController.createFarmer);
app.get('/farmers/:id', farmerController.getFarmerById);
app.get('/farmers', farmerController.getAllFarmers);
app.put('/farmers/:id', farmerController.updateFarmer);
app.delete('/farmers/:id', farmerController.deleteFarmer);

describe('FarmerController', () => {
beforeAll(async () => {
jest.setTimeout(30000);
await sequelize.authenticate();
await sequelize.sync();
});
    
afterAll(async () => {
await sequelize.close();
});
//   beforeEach(async () => {
//     // Clear the database before each test
//     await Farmer.destroy({ where: {} });
//   });

  describe('createFarmer', () => {
    it('should create a new farmer', async () => {
      const farmerData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        address: '123 Main St',
      };

      const response = await request(app).post('/farmers').send(farmerData);

      expect(response.status).toBe(201);
      expect(response.body.name).toBe(farmerData.name);
      expect(response.body.email).toBe(farmerData.email);
      expect(response.body.phone).toBe(farmerData.phone);
      expect(response.body.address).toBe(farmerData.address);
    });

    it('should return validation errors for invalid input', async () => {
      const invalidFarmerData = {
        name: '',
        email: 'invalid-email',
        phone: '123',
        address: '',
      };

      const response = await request(app).post('/farmers').send(invalidFarmerData);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('getFarmerById', () => {
    it('should return a farmer by ID', async () => {
      const farmer = await Farmer.create({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        address: '123 Main St',
      });

      const response = await request(app).get(`/farmers/${farmer.id}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(farmer.id);
      expect(response.body.name).toBe(farmer.name);
      expect(response.body.email).toBe(farmer.email);
      expect(response.body.phone).toBe(farmer.phone);
      expect(response.body.address).toBe(farmer.address);
    });

    it('should return 404 for non-existent farmer ID', async () => {
      const response = await request(app).get('/farmers/999');

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Farmer not found');
    });
  });

  describe('getAllFarmers', () => {
    it('should return a paginated list of farmers', async () => {
      // Create multiple farmers in the database
      await Farmer.bulkCreate([
        { name: 'John Doe', email: 'john@example.com', phone: '1234567890', address: '123 Main St' },
        { name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', address: '456 Elm St' },
        { name: 'Alice Johnson', email: 'alice@example.com', phone: '5555555555', address: '789 Oak Ave' },
      ]);

      const response = await request(app).get('/farmers?page=1&pageSize=2');

      expect(response.status).toBe(200);
      expect(response.body.totalPages).toBe(2);
      expect(response.body.currentPage).toBe(1);
      expect(response.body.pageSize).toBe(2);
      expect(response.body.data.length).toBe(2);
    });
  });

  describe('updateFarmer', () => {
    it('should update a farmer by ID', async () => {
      const farmer = await Farmer.create({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        address: '123 Main St',
      });

      const updatedFarmerData = {
        name: 'Updated Name',
        email: 'updated@example.com',
        phone: '9999999999',
        address: '456 Updated St',
      };

      const response = await request(app).put(`/farmers/${farmer.id}`).send(updatedFarmerData);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(farmer.id);
      expect(response.body.name).toBe(updatedFarmerData.name);
      expect(response.body.email).toBe(updatedFarmerData.email);
      expect(response.body.phone).toBe(updatedFarmerData.phone);
      expect(response.body.address).toBe(updatedFarmerData.address);
    });

    it('should return 404 for non-existent farmer ID', async () => {
      const response = await request(app).put('/farmers/999').send({});

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Farmer not found');
    });
  });

  describe('deleteFarmer', () => {
    it('should delete a farmer by ID', async () => {
      const farmer = await Farmer.create({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        address: '123 Main St',
      });

      const response = await request(app).delete(`/farmers/${farmer.id}`);

      expect(response.status).toBe(204);

      const deletedFarmer = await Farmer.findByPk(farmer.id);
      expect(deletedFarmer).toBeNull();
    });

    it('should return 404 for non-existent farmer ID', async () => {
      const response = await request(app).delete('/farmers/999');

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Farmer not found');
    });
  });
});