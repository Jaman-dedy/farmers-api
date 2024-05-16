import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Farmer from './Farmer';

class Order extends Model {
  public id!: number;
  public farmerId!: number;
  public orderDate!: Date;
  public totalAmount!: number;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    farmerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Farmer,
        key: 'id',
      },
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
  }
);

export default Order;