import { context, PersistentVector } from "near-sdk-core";

nearBindgen;

export class Questionaire {
  sender: string;
  question1: Question;
  question2: Question;
  question3: Question;
  question4: Question;
  question5: Question;
  constructor(
    public answer1: string | null,
    public answer2: string | null,
    public answer3: string | null,
    public answer4: string | null,
    public answer5: string | null
  ) {
    this.sender = context.sender;
    this.question1.question = "What is your name?";
    this.question1.answer = answer1;
    this.question2.question = "What is the Capital of Germany?";
    this.question2.answer = answer2;
    this.question3.question = "What is the full meaning of the acronym U.S.A?";
    this.question3.answer = answer3;
    this.question4.question = "What is the meaning of the acronym E.U?";
    this.question4.answer = answer4;
    this.question5.question = "What is the name of the current CEO of Google?";
    this.question5.answer = answer5;
  }
  getQuestions(): string[] {
    return [
      this.question1.question,
      this.question2.question,
      this.question3.question,
      this.question4.question,
      this.question5.question,
    ];
  }
}

class Question {
  question: string;
  answer: string | null;
}


export const questionaires = new PersistentVector<Questionaire>('questionaire')