import sequelize from "../db";
import { DataTypes } from "sequelize";

const Order = sequelize.define("Order", {
  //userId: { type: DataTypes.INTEGER, allowNull: false },
  products: [
    {
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
    },
  ],
  total: { type: DataTypes.FLOAT, allowNull: false },
});

export default Order;
