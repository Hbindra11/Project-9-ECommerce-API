import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const Customer = sequelize.define("Customer", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: {type: DataTypes.STRING, allowNull: false}
});

//User.sync({ logging: false});

export default Customer;
