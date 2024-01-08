// ProductController.js
import Product from "../Models/ProductModel.js";

class ProductController {

  // Create a new Product
  static makeProduct = async (req, res) => {
    const { title, category, description, price, supplier} = req.body;

    try {
      const product = await Product.create({
        title,
        category,
        description,
        price,
        supplier
        
      });

      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Get all Products
  static getAllProducts = async (req, res) => {
    try {
      const Products = await Product.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get a single Product by ID
  static getOneProduct = async (req, res) => {
    const id = req.params.id;

    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        return res.status(404).json({ error: "No such Product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Update a Product by ID
  static updateProduct = async (req, res) => {
    const id = req.params.id;
    const { title, category, description, price, supplier} = req.body;

    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        return res.status(404).json({ error: "No such Product" });
      }
  
      product.title = title;
      product.category = category;
      product.description = description;
      product.price = price;
      product.supplier = supplier;

      await product.save();

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Delete a Product by ID
  static deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
      const deletedProduct = await Product.destroy({ where: { id } });
      if (!deletedProduct) {
        return res.status(404).json({ error: "No such Product" });
      }
      res.status(200).json({ deletedProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default ProductController;
