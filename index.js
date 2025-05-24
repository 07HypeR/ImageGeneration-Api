import express from "express";
import dotenv from "dotenv";
import imageRoutes from "./routes/imageRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "10mb" }));

app.use("/api/image", imageRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
