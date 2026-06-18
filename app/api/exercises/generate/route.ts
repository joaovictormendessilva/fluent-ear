import { groq } from "@/app/lib/groq";
import { GenerateExerciseRequest } from "@/app/shared/types/exercise";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: GenerateExerciseRequest = await request.json();

  const prompt = `
You are generating content for FluentEar, an AI-powered English listening platform.

The goal is listening comprehension.

The user will listen to the audio and explain what they understood.

Generate ONLY a valid JSON object.

Requirements:

Level: ${body.level}
Topic: ${body.topic}
Length: ${body.contentLength}

Rules for originalText:

- Must be natural English.
- Must sound like something a native speaker would say.
- Must contain only the spoken content.
- Never include instructions.
- Never include questions to the learner.
- Never include phrases like:
  - "Listen..."
  - "Listen to the conversation..."
  - "Choose the correct answer..."
  - "What is..."
  - "Answer the question..."
- Do not create quizzes.
- Do not create exercises.
- Do not create vocabulary lists.
- Do not create dialogues with speaker labels.
- Generate a realistic statement, story, experience, opinion or situation.

Rules for generatedExplanation:

- Must explain the meaning of the original text.
- Must be a single string.
- Must not contain questions.
- Must not contain bullet points.
- Must not contain JSON objects.
- Must not contain arrays.
- Must not contain vocabulary explanations.
- Must not contain exercises.
- Must summarize what the speaker is communicating.

Variation requirements:

- Avoid repeating common technology examples such as smartphones unless they fit naturally.
- Use diverse scenarios.
- Generate different contexts every time.
- Prioritize realism and variety.

Return exactly:

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
