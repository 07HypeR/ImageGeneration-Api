import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function generateImageFromPrompt(prompt) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash-preview-image-generation",
    contents: `Create a 1024x1024 square image. ${prompt}`, // You can pass string directly
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
      imageDetail: "HIGH", // ✅ FIXED: Include both
    },
  });

  const parts = response.candidates?.[0]?.content?.parts || [];

  const imagePart = parts.find(
    (part) => part.inlineData?.mimeType === "image/png"
  );

  if (!imagePart) {
    throw new Error("Image generation failed or no image returned.");
  }

  return imagePart.inlineData.data; // base64 image string
}
