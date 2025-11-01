import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../controllers/productcatalogController";


const router = Router();
router.get("/", getProducts);
router.post("/", createProduct);

router.put(
  "/:id",
  updateProduct
);



