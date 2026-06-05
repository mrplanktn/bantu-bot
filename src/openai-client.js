import { OpenAI } from 'openai';

export async function analyzeContent(content, type) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is missing.");

  const openai = new OpenAI({ apiKey });

  const systemPrompt = type === 'issue' 
    ? "You are an open-source project maintainer helper. Analyze the following GitHub issue. Provide a JSON response with two keys: 'labels' (an array of suggested labels based on the text, e.g., bug, enhancement, documentation) and 'reply' (a polite, helpful response acknowledging the contributor)."
    : "You are an expert code reviewer. Analyze the following Pull Request details. Provide a concise summary of the changes and highlight any potential risks or bugs.";

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: content }
    ],
    response_format: type === 'issue' ? { type: "json_object" } : undefined
  });

  return response.choices[0].message.content;
}
