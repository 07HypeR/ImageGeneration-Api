import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function uploadImageToSupabase(base64Image) {
  try {
    const fileName = `${uuidv4()}.png`;
    const buffer = Buffer.from(base64Image, "base64");

    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(`public/${fileName}`, buffer, {
        contentType: "image/png",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    const imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`;

    return imageUrl;
  } catch (err) {
    console.error("Upload failed:", err.message);
    throw err;
  }
}
