import express from "express";
import { generateImageHandler } from "../controllers/imageController.js";
import { validatePrompt } from "../utils/validatePrompt.js";

const router = express.Router();

router.post("/generate", validatePrompt, generateImageHandler);

export default router;
