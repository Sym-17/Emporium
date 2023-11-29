import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const url = process.env.ELEPHANT_SQL_URL ?? "";

const database = new Sequelize(url);

export default database;
