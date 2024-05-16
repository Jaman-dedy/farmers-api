import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Fertilizer extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Fertilizer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Fertilizer',
    tableName: 'Fertilizers',
  }
);

export default Fertilizer;