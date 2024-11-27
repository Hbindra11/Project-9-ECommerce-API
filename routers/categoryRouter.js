import { Router } from "express";
import {
  getCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const categoryRouter = Router();

categoryRouter.route("/").get(getCategory).post(createCategory); //((req, res) => res.send({ message: "hi im get category" }));
categoryRouter
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);
export default categoryRouter;
