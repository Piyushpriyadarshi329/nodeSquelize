require("dotenv").config();

const { Dialect, Sequelize, DataTypes } = require('sequelize');







var sequelize = require("sequelize");
var db = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
    }
);

async function TestConnection() {
    try {
      await db.authenticate();
      console.log('Databse Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  TestConnection();




module.exports = db;