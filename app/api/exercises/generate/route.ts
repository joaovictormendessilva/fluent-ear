import { groq } from "@/app/lib/groq";
import { GenerateExerciseRequest } from "@/app/shared/types/exercise";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: GenerateExerciseRequest = await request.json();

  const prompt = `
                  Generate an English listening exercise.

                  Level: ${body.level}
                  Topic: ${body.topic}
                  Length: ${body.contentLength}

                  Return ONLY valid JSON:

                  {
                    "originalText": "...",
                    "generatedExplanation": "..."
                  }
                `;

  const completion = await createCompletion(prompt);

  const content = completion.choices[0].message.content;

  return NextResponse.json(JSON.parse(content!));
}

const createCompletion = async (prompt: string) => {
  return await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: "You must return only valid JSON. No markdown, no explanations, no code fences.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });
};
