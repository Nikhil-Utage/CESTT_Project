import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import registerRoute from "./routes/registerRoute.js";
import supportRoute from "./routes/supportRoute.js";
import testCentreRoute from "./routes/testCentreRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/v1/new", registerRoute);
app.use("/v1/support", supportRoute);
app.use("/v1/testcentres", testCentreRoute);

app.all("*", (req, res) => {
  res.send("Welcome to APIs");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error Running Server");
    console.log(err.message);
  }
  console.log("Server running on port: ", PORT);
});
