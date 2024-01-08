import express from "express";
import ProductController from "../Controllers/ProductController.js";
import {verifyadmin, verifyToken} from '../middlewares/authMiddleware.js'

const ProductRouter = express.Router();

// POST a new Product
ProductRouter.post("/", ProductController.makeProduct);

// GET all Products
ProductRouter.get("/", ProductController.getAllProducts);

// GET a single Product
ProductRouter.get("/:id", ProductController.getOneProduct);

// UPDATE a Product
ProductRouter.patch("/:id", ProductController.updateProduct);

// DELETE a Product
ProductRouter.delete("/:id",ProductController.deleteProduct);

export default ProductRouter;
