interface Vote {
  id: string;
  pollId: string;
  response: Record<
    string,
    | {
        isMultiAnswer: true;
        answer: string[];
      }
    | {
        isMultiAnswer: false;
        answer: string;
      }
  >;
}

export default Vote;
