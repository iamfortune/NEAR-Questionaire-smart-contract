import { storage, context, logging } from "near-sdk-as";
import { Questionaire } from "./model";

export function getAllQuestions(): string[] {
  return new Questionaire(null, null, null, null, null).getQuestions();
}

export function setAnswers(
  answer1: string,
  answer2: string,
  answer3: string,
  answer4: string,
  answer5: string
): void {
  const answer = new Questionaire(answer1, answer2, answer3, answer4, answer5);
}
