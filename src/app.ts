import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config } from 'dotenv';
import sequelize from './config/database';
import routes from './routes';

config();

const app: Application = express();
const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Farmer Ordering System API',
      version: '1.0.0',
      description: 'API documentation for the Farmer Ordering System',
    },
  },
  apis: ['./src/swagger/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;