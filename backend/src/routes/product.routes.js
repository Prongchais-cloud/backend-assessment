import { Router } from "express";
import { Product } from "../models/product.model.js";

export const router = Router();

// Read all product
router.get("/", async (req, res, next) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

// Read one product
router.get("/:id", async (req, res, next) => {
    try {
        const productId = req.params.id;

        const data = await Product.findById(productId);

        if (!data) {
            return res.status(404).json({ error: "Not found!!" });
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

// Create product
router.post("/", async (req, res, next) => {
    const { name, price, quantity } = req.body;

    if (!name || !price ) {
        return res
            .status(400)
            .json({ error: "Missing name, price or quantity!!" });
    }

    const newProduct = await Product.create({ name, price, quantity });

    const newP = newProduct.toObject();

    res.status(201).json(newP);
});

// Update product
router.put("/:id", async (req, res, next) => {
    try {
        const { name, price, quantity } = req.body;

        if (!name || !price || !quantity) {
            return res
                .status(400)
                .json({ error: "Missing name, price or quantity!!!" });
        }

        const updateProduct = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { name, price, quantity },
            { new: true, runValidators: true },
        );

        if (!updateProduct) {
            return res.status(404).json({ error: "Not found!!" });
        }

        res.status(200).json(updateProduct);
    } catch (error) {
        next(error);
    }
});

// Delete product
router.delete("/:id", async (req, res, next) => {
    try {
        const deleteProduct = await Product.findOneAndDelete(req.params.id);

        if (!deleteProduct) {
            return res.status(404).json({ error: "Not found!!" });
        }

        res.status(201).json("Delete successfull!!");
    } catch (error) {
        next(error);
    }
});
