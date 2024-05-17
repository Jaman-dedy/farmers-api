import { Dialect } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
}

interface DatabaseEnvironmentConfig {
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: DatabaseConfig;
}

const databaseConfig: DatabaseEnvironmentConfig = {
  development: {
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'farmer_2024',
    database: process.env.DB_NAME || 'farmer_db',
    host: process.env.DB_HOST || 'db',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DB_USERNAME || 'your_test_username',
    password: process.env.TEST_DB_PASSWORD || 'your_test_password',
    database: process.env.TEST_DB_NAME || 'farmer_db_test',
    host: process.env.TEST_DB_HOST || 'localhost',
    port: Number(process.env.TEST_DB_PORT) || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME || 'your_prod_username',
    password: process.env.PROD_DB_PASSWORD || 'your_prod_password',
    database: process.env.PROD_DB_NAME || 'your_prod_database',
    host: process.env.PROD_DB_HOST || 'localhost',
    port: Number(process.env.PROD_DB_PORT) || 5432,
    dialect: 'postgres',
  },
};

export default databaseConfig;