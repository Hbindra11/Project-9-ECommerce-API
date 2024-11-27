import Product from "../models/Product.js";
import Customer from "../models/Customer.js";
import Order from "../models/Order.js";
import Category from "../models/Category.js";
import sequelize from "./index.js";


Customer.hasMany(Order, { foreignKey: { allowNull: false, name: "CustomerId" } });
  Order.belongsTo(Customer, {
    foreignKey: { allowNull: false, name: "CustomerId" },
    onDelete: "CASCADE",
  });
  Category.hasMany(Product, {
    foreignKey: { allowNull: false, name: "categoryId" },
  });
  Product.belongsTo(Category, {
    foreignKey: { allowNull: false, name: "categoryId" },
    onDelete: "CASCADE",
  });

  sequelize.sync({ logging: false });

  //sequelize.sync({alter:true});