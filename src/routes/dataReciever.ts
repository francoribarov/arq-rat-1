import express from "express";
import { Request, Response } from "express";

import { dataService } from "../services/dataService";
import { Data } from "../types/types";
import { executePipeline } from "../pipeline/PipelineFactory";
import { da } from "@faker-js/faker/.";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const data: Data = req.body;

  if (!data) {
    return res.status(400).send("No data received");
  }
  console.log(data);
  const isValid: boolean = dataService.validateData(data);

  if (!isValid) {
    return res.status(400).send("Invalid data");
  }
  executePipeline(data);
  return res.status(200).send("Data received");
});

export default router;
