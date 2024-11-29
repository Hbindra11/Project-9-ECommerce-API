import joi from "joi";

const orderSchema = joi.object({
  orderTotal: joi.number().positive().precision(2).min(10.0).max(10000.0), // validation fails to check limit of 2 decimal places does not work
});

export default orderSchema;
