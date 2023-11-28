import { DataTypes } from "sequelize";

import sequelize from "../database/database";
import { timeStamp } from "console";
const Model = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "productname",
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "subcategory",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "product",
    timestamps: false,
  }
);

export default Model;
