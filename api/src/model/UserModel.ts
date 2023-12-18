import { DataTypes } from "sequelize";
import database from "../database/database";

const UserModel = database.define(
  "userdata",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "user_name",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "userdata",
    timestamps: false,
  }
);

export default UserModel;
