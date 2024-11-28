import joi from "joi";


const customerSchema = joi.object({
  customerName: joi.string().min(3).max(12),
  customerEmail: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "de"] } }),
});

export default customerSchema;
