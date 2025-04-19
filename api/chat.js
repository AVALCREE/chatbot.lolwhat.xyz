// api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  try {
    const response = await fetch("https://aimlapi.com/api/v1/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "a06d79fdf6234fb9b579620c6c986b0f"
      },
      body: JSON.stringify({
        prompt: prompt,
        model: "gpt-3.5-turbo",
        temperature: 0.7
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API call failed" });
  }
}
