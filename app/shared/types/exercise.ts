export interface GenerateExerciseRequest {
  level: string;
  topic: string;
  contentLength: string;
}

export interface GenerateExerciseResponse {
  originalText: string;
  generatedExplanation: string;
}
