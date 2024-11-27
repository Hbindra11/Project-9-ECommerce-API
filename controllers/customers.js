import Customer from "../models/Customer.js";
import Order from "../models/Order.js";

export const getCustomers = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const {
      body: { name, email, password },
    } = req;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ error: "please enter all fields:name, email, password !" });
    const found = await Customer.findOne({ where: { email } });
    if (found)
      return res.status(400).json({ error: "customer already exists!" });
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const customer = await Customer.findByPk(id, { include: Order });
    if (!customer)
      return res.status(400).json({ error: "customer not found!" });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const {
      body: { name, email, password },
      params: { id },
    } = req;
    if (!name || !email || !password)
      return res.status(400).json({
        error: "check all fields: name, email, password have a value!",
      });
    const customer = await Customer.findByPk(id); //console.log('here is the id: '+id+'found? '+customer);
    if (!customer) res.status(404).json({ message: "customer does not exit!" });
    await customer.update(req.body);
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
