import { Request, Response } from "express";
import { Product } from "../models/ProductCatalog";


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
  