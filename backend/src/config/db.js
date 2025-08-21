import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(ENV.MONGO_URI);

    console.log("Mongoose connect successfully ", con.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};
