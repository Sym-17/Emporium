import express from "express";
import cors from "cors";
import database from "./database/database.js";
import ProductModel from "./model/ProductModel.js";
import UserModel from "./model/UserModel.js";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";

// Initialize the express engine
const app: express.Application = express();

// Take a port 5000 for running server.
const port: number = 5000;

app.use(express.json());

//For working with same domain and preventing blocking of browser
app.use(cors());

// Handling '/' Request
app.get("/", (_req, _res) => {
  database
    .sync()
    .then(async () => {
      // console.log("Database synced");

      const allProducts = await ProductModel.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      _res.send(allProducts);
    })
    .catch((err) => {
      console.error("Error syncing database:", err);
    });
});

app.post("/add-product", (req, res) => {
  ProductModel.create({
    productName: req.body.productName,
    category: req.body.category,
    subCategory: req.body.subCategory,
    price: req.body.price,
    description: req.body.description,
  });
  res.send("Received!");
});

app.post("/signup", (req, res) => {
  UserModel.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  res.send("Received!");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
