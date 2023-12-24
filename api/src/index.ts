import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";
import addProduct from "./controller/addProduct.js";
import signup from "./controller/signup.js";
import showProducts from "./controller/showProducts.js";

// Initialize the express engine
const app: express.Application = express();

// Take a port 5000 for running server.
const port: number = 5000;

app.use(express.json());

//For working with same domain and preventing blocking of browser
app.use(cors());

// Handling '/' Request
app.get("/", (req, res) => {
  showProducts(req, res, "");
});

app.post("/add-product", addProduct);

app.post("/signup", signup);

app.get("/men", (req, res) => {
  showProducts(req, res, "men");
});
app.get("/women", (req, res) => {
  showProducts(req, res, "women");
});
app.get("/children", (req, res) => {
  showProducts(req, res, "child");
});
app.get("/accessories", (req, res) => {
  showProducts(req, res, "other");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express cd 
		http://localhost:${port}/`);
});
