import joi from "joi";

const productSchema = joi.object({
  productName: joi.string().min(3).max(20),
  productPrice: joi.number().positive().precision(2).min(0.5).max(10000.0), // validation fails to check limit of 2 decimal places does not work
});

export default productSchema;
