import categorySchema from "../schemas/categorySchema.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;
    const found = await Category.findOne({ where: { name } });
    if (found)
      return res.status(400).json({ error: "category already exists!" });
    if (!name)
      return res.status(404).json({ error: "please enter a category name" });
    //need to validate category name. For example min length: 3, max length:12
    await categorySchema.validateAsync({ categoryName: name });
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id, { include: Product });
    if (!category)
      return res.status(400).json({ error: "category not found!" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const {
      body: { name },
      params: { id },
    } = req;
    if (!name)
      return res.status(404).json({ error: "please enter a category name" });
    const category = await Category.findByPk(id);
    if (!category)
      return res.status(400).json({ error: "category not found!" });
    //need to validate category name. For example min length: 3, max length:12
    await categorySchema.validateAsync({ categoryName: name });
    await category.update(req.body);
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category)
      return res.status(404).json({ error: "category not found!" });
    await category.destroy();
    res.json({ message: "category was deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
