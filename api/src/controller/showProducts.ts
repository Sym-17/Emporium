import ProductModel from "../model/ProductModel";
import { Request, Response } from "express";

const showProducts = async (
  req: Request<{}, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>,
  category: string
) => {
  try {
    let whereCondition;

    if (category !== "") whereCondition = { category };
    else whereCondition = {};

    const allProducts = await ProductModel.findAll({
      where: whereCondition,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send(allProducts);
  } catch {
    (err: Error) => {
      console.error("Error syncing database:", err);
    };
  }
};

export default showProducts;
