import { Product } from "../models/product.model.js";

export const sortProducts = async (req, res) => {
  try {
    const { name, sort } = req.query;

    let query = {};
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    let productsQuery = Product.find(query);

    if (sort) {
      productsQuery = productsQuery.sort(sort);
    }

    const products = await productsQuery;
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};