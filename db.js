import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url =
  "mongodb+srv://adityabansal22cse:Aditya11@bookfair.vggamhp.mongodb.net/CIBT";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Could not connect to DB", err);
  }
};

export default connectDB;
