export interface IQuiz {
    question: {
      id: number;
      title: string;
    };
  }

  export interface IClientQuiz {
    totalQuiz: number;
    quiz: IQuiz;
  }
  
  export interface IAnswer {
    value: string;
    label: string;
  }