interface PollQuestionBase {
  question: string;
  order: number;
}

type PollQuestion = PollQuestionBase &
  (
    | {
        isMultiAnswer: true;
        options: string[];
        maxAnswers: number;
      }
    | {
        isMultiAnswer: false;
      }
  );

export default PollQuestion;
