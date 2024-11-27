import Product from "../models/Product";
import User from "../models/User";
import Order from "../models/Order";
import Category from "../models/Category";
import sequelize from "../db";


  User.hasMany(Order, { foreignKey: { allowNull: false, name: "userId" } });
  Order.belongsTo(User, {
    foreignKey: { allowNull: false, name: "userId" },
    onDelete: "CASCADE",
  });
  Category.hasMany(Product, {
    foreignKey: { allowNull: false, name: "categoryId" },
  });
  Product.belongsTo(Category, {
    foreignKey: { allowNull: false, name: "categoryId" },
    onDelete: "CASCADE",
  });

  //sequelize.sync({ logging: false });

  sequelize.sync();