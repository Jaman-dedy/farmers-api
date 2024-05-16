
import { Sequelize } from 'sequelize';
import databaseConfig from './database';


const env = process.env.NODE_ENV || 'development';
const config = databaseConfig[env as keyof typeof databaseConfig];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
});

export default sequelize;