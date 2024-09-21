import express from "express";
import dotenv from "dotenv";
const app = express();
import dataReciever from "./routes/dataReciever";

dotenv.config();

const expressPort = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.use("/data", dataReciever);

app.listen(expressPort, () => {
  console.log("Server is running at port " + expressPort);
});
