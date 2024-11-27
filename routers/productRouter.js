import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const productRouter = Router();

productRouter.route("/").get(getAllProducts).post(createProduct); //((req, res) => res.send({ message: "im the get products endpoint" }));
productRouter
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);
export default productRouter;
