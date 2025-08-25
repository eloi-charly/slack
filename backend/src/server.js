import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(ENV.PORT, () => {
  console.log(`Listening at http://localhost:${ENV.PORT}`);
  connectDB();
});
