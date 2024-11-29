import joi from "joi";

const customerSchema = joi.object({
  customerName: joi.string().min(3).max(12),
  customerEmail: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "de"] } }),
  customerPassword: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

export default customerSchema;
