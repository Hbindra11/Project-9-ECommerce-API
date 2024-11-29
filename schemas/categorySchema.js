import joi from "joi";

const categorySchema = joi.object({
  categoryName: joi.string().min(3).max(12),  
});

export default categorySchema;