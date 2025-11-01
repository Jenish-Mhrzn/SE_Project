import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../controllers/productcatalogController";


const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - category
 *         - stock
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated ID of the product
 *         name:
 *           type: string
 *           description: Product name
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           description: Product price
 *         category:
 *           type: string
 *           description: Product category
 *         stock:
 *           type: number
 *           description: Available stock quantity
 *         releaseDate:
 *           type: string
 *           format: date-time
 *           description: Product release date
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

router.get("/", getProducts);

/**
 * @swagger
 * /api/productcatalog:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post("/", createProduct);

router.put(
  "/:id",
  updateProduct
);


router.delete("/:id", deleteProduct);

router.get("/:id", getProductById);

export default router;




