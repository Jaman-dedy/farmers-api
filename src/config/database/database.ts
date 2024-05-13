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
    username: process.env.DB_USERNAME || 'your_dev_username',
    password: process.env.DB_PASSWORD || 'your_dev_password',
    database: process.env.DB_NAME || 'your_dev_database',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DB_USERNAME || 'your_test_username',
    password: process.env.TEST_DB_PASSWORD || 'your_test_password',
    database: process.env.TEST_DB_NAME || 'your_test_database',
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