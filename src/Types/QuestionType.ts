export type QuestionTypes ={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

}


export type QuestionState = QuestionTypes & {answers: string[]};