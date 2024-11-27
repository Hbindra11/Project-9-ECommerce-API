import express from "express";
import "./db/associations.js";
import customerRouter from "./routers/customerRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/customers", customerRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.listen(port, () => console.log(`Server is running on port ${port} `));
