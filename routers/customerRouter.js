import { Router } from "express";
import { getCustomers } from "../controllers/customers.js";
import { createCustomer } from "../controllers/customers.js";
import { getCustomerById, updateCustomer, deleteCustomer } from "../controllers/customers.js";

const customerRouter = Router();
customerRouter.route("/").get(getCustomers).post(createCustomer); //.get((req, res) => res.json({ message: "testing get successful" }))

customerRouter.route("/:id").get(getCustomerById).put(updateCustomer).delete(deleteCustomer);
//.get((req, res) => res.json({ message: "testing post successful" }));

export default customerRouter;
