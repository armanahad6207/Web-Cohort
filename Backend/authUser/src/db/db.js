const mongoose = require("mongoose");
require("dotenv").config({ path: "./src/.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Db_url);
    if (conn) console.log("connected to Db");
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
