import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500), json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      body: { name, description, price, categoryId },
    } = req;
    if (!name || !description || !price || !categoryId)
      return res.status(404).json({
        error:
          "please provide all fields: name, description, price, categoryId",
      });
    const found = await Product.findOne({ where: { name, description } });
    if (found) return res.status(400).json({ error: "product already exists" });
     //need to validate product name is min length 3 and max 12 etc and price is within min and max range
    const category = await Product.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findByPk(id, { include: Category });
    if (!product) return res.status(404).json({ error: "product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {
      body: { name, description, price, categoryId },
      params: { id },
    } = req;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "product not found" });
    if (!name || !description || !price || !categoryId)
      return res.status(404).json({
        error:
          "please provide all fields: name, description, price, categoryId",
      });
//need to validate product name is min length 3 and max 12 etc and price is within min and max range
    await product.update(req.body);
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "product not found" });
    await product.destroy();
    res.json({ message: "product was deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
