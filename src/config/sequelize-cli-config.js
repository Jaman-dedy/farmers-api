require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'farmer_2024',
    database: process.env.DB_NAME || 'farmer_db',
    host: process.env.NODE_ENV === 'docker' ? 'db' : 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DB_USERNAME || 'your_test_username',
    password: process.env.TEST_DB_PASSWORD || 'your_test_password',
    database: process.env.TEST_DB_NAME || 'farmer_db_test',
    host: process.env.NODE_ENV === 'docker' ? 'db' : 'localhost',
    port: Number(process.env.TEST_DB_PORT) || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME || 'your_prod_username',
    password: process.env.PROD_DB_PASSWORD || 'your_prod_password',
    database: process.env.PROD_DB_NAME || 'your_prod_database',
    host: process.env.NODE_ENV === 'docker' ? 'db' : 'localhost',
    port: Number(process.env.PROD_DB_PORT) || 5432,
    dialect: 'postgres',
  },
};