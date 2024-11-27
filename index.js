import express from "express";
import "./db/associations.js";
import customerRouter from "./routers/customerRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/customers", customerRouter);

app.listen(port, () => console.log(`Server is running on port ${port} `));
