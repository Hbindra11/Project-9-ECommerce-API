import { JSONB } from "sequelize";
import Customer from "../models/Customer.js";
import Order from "../models/Order.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      body: { products, total, CustomerId },
    } = req;
    //console.log(req.body)
    if (!products || !total || !CustomerId)
      return res
        .status(404)
        .json({ error: "please enter all fields:products,total,customerId " });
    const validCustomer = await Customer.findByPk(CustomerId);
    if (!validCustomer)
      return res
        .status(400)
        .json({ error: "customer with this Id not found!" });
    const order = await Order.create(req.body);
    res.json(order);
    //console.log('here is the body: '+JSON.stringify(req.body))
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await Order.findByPk(id, { include: Customer });
    //console.log(JSON.stringify(order));
    if (!order) return res.status(400).json({ error: "order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const {
      body: { products, total, CustomerId },
      params: { id },
    } = req;
    const order = await Order.findByPk(id);
    console.log(JSON.stringify(order));
    if (!order) return res.status(400).json({ error: "order not found" });
    if (!products || !total || !CustomerId)
      return res
        .status(404)
        .json({ error: "please enter all fields:products,total,customerId " });
    const validCustomer = await Customer.findByPk(CustomerId);
    if (!validCustomer)
      return res
        .status(400)
        .json({ error: "customer with this Id not found!" });
    await order.update(req.body);
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await Order.findByPk(id);
    if (!order) return res.status(400).json({ error: "order not found" });
    await order.destroy();
    res.json({message:"order was deleted"})
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
