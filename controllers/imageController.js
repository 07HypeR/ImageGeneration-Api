import { generateImageFromPrompt } from "../services/geminiService.js";
import { uploadImageToSupabase } from "../services/supabaseService.js";

export const generateImageHandler = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const base64Image = await generateImageFromPrompt(prompt);
    const publicUrl = await uploadImageToSupabase(base64Image);

    res.status(200).json({ imageUrl: publicUrl });
  } catch (error) {
    next(error);
  }
};
