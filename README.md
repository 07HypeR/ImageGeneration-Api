# 🖼️ Gemini Image Generator API

This project provides a backend API that generates AI images using **Google Gemini** (`@google/genai`) from text prompts, stores them in **Supabase Storage**, and returns a public image URL.

---

## 🚀 Features

- Generate images using Google Gemini 2.0 (`image-generation` model)
- Automatically uploads images to Supabase Storage
- Returns a publicly accessible image URL
- Supports large base64 payloads
- Modular codebase (image generation & upload services separated)
- Caching layer ready (optional)

---

## 🛠 Tech Stack

- Node.js + Express
- Google Gemini API (`@google/genai`)
- Supabase Storage (`@supabase/supabase-js`)
- `dotenv` for config management
- `uuid` for unique filenames

---
