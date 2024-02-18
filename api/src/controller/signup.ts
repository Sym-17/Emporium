import UserModel from "../model/UserModel";
import { Request, Response } from "express";

const signup = async (
  req: Request<{}, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  UserModel.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  res.send("Received!");
};

export default signup;
