import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {type: String, unique: true},
        price: {type: Number},
        quantity: {type: Number, default: 1},
    }
);

export const Product = mongoose.model("Product", productSchema);