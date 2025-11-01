import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../controllers/productcatalogController";


router.post("/", createProduct);

router.put(
  "/:id",
  updateProduct
);
