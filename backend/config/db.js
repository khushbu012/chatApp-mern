const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://chatapp:chatapp1@cluster0.k4hwhmu.mongodb.net/chatapp-db?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
