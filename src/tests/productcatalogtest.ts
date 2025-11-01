import request from "supertest";
import mongoose from "mongoose";
import app from "../app";
import { Product } from "../models/ProductCatalog";
import { connectDB } from "../config/database";

describe("Products API", () => {
    // Connect to DB before running any tests
    beforeAll(async () => {
      await connectDB();
    });
  
    // Clean DB before each test
    beforeEach(async () => {
      await Product.deleteMany({});
    });
  
    // Close DB connection after all tests
    afterAll(async () => {
      await mongoose.connection.close();
    });

     // ------------------ GET PRODUCTS ------------------
  describe("GET /api/productcatalog", () => {
    beforeEach(async () => {
      await Product.create([
        {
          name: "Product 1",
          description: "Description 1",
          price: 100,
          category: "Electronics",
          stock: 10,
        },
        {
          name: "Product 2",
          description: "Description 2",
          price: 200,
          category: "Books",
          stock: 5,
        },
        {
          name: "Product 3",
          description: "Description 3",
          price: 300,
          category: "Fashion",
          stock: 8,
        },
      ]);
    });

    it("should get all products", async () => {
      const response = await request(app)
        .get("/api/productcatalog") // ✅ Updated path
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.products).toHaveLength(3);
    });
  });

});