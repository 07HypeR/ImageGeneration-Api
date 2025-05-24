export const validatePrompt = (req, res, next) => {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== "string" || prompt.trim().length < 5) {
    return res.status(400).json({ error: "Invalid prompt" });
  }
  next();
};
