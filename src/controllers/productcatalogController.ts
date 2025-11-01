import { Request, Response } from "express";
import { Product } from "../models/ProductCatalog";

import {
  CreateProductInput
}from "../schemas/productcatalogSchemas";

// Get all products
export const getProducts = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.json({
        success: true,
        data: { products },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching products",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  // Create a new product
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productData: CreateProductInput = req.body;

    const product = new Product({
      ...productData,
      // createdBy: (req as any).user._id, // Uncomment if user-based products
      releaseDate: productData.releaseDate
        ? new Date(productData.releaseDate)
        : undefined,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
  