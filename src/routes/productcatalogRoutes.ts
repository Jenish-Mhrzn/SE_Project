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


router.delete("/:id", deleteProduct);

router.get("/:id", getProductById);

export default router;




