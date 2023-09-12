import { AnswerObject } from "./AnswerTypes";

export type QuestionCardType = {
    question: string;
    answers: string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}