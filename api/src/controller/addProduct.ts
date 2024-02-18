import ProductModel from "../model/ProductModel";
import { Request, Response } from "express";

const addProduct = async (
  req: Request<{}, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  ProductModel.create({
    productName: req.body.productName,
    category: req.body.category,
    subCategory: req.body.subCategory,
    price: req.body.price,
    description: req.body.description,
  });
  res.send("Received!");
};

export default addProduct;
