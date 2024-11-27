import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define("Order", {
  //userId: { type: DataTypes.INTEGER, allowNull: false },
  products: {
    type: DataTypes.ARRAY(DataTypes.JSONB,{
      productId: { type: DataTypes.JSONB, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
    }),
    allowNull: false,
  },

  total: { type: DataTypes.FLOAT, allowNull: false },
});

export default Order;
