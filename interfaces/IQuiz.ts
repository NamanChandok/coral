export interface IQuiz {
    question: {
      id: number;
      title: string;
    };
    answers: [IAnswer, IAnswer, IAnswer, IAnswer, IAnswer];
  }

  export interface IClientQuiz {
    totalQuiz: number;
    quiz: IQuiz;
  }
  
  export interface IAnswer {
    value: string;
    label: string;
  }