import mongoose, { Document, Schema, Types } from "mongoose";

export interface IProduct extends Document {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  price: number;
  category: string;
  stock: number;
  releaseDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
