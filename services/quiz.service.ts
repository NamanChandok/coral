import { NextApiResponse } from "next";
import { IClientQuiz } from "../interfaces";
import { Quiz } from "../data/quizData";
import { makeResponse } from "../utils";
import { throwBadRequest } from "./error.service";

export const getQuiz = (
  reqId: string | string[] | undefined,
  res: NextApiResponse
) => {
  if (reqId === undefined) {
    return throwBadRequest(res);
  }

  const id = parseInt(Array.isArray(reqId) ? reqId[0] : reqId, 10);
  const totalQuiz = Quiz.length;
  if (id >= Quiz.length) {
    return throwBadRequest(res);
  }
  
  const quiz = { ...Quiz[id] };

  res.status(200).json(makeResponse<IClientQuiz>(200, "", { totalQuiz, quiz }));
};

export const calculateResult = (answers: string[], res: NextApiResponse) => {
  if (answers.length !== Quiz.length) {
    return throwBadRequest(res);
  }

  var result = "";

  const never = answers.filter((v) => (v === "never")).length;

  const rarely = answers.filter((v) => (v === "rarely")).length;

  const sometimes = answers.filter((v) => (v === "sometimes")).length;

  const often = answers.filter((v) => (v === "often")).length;

  const v_often = answers.filter((v) => (v === "v_often")).length;

  if (never >= 4) {
    result = "No Clear Diagnosis \n An in-person Psychologist Session is recommended."
  } else if ( rarely >=3 ) {
    result = "No Clear Diagnosis \n An in-person Psychologist Session is recommended."
  } else if ( sometimes >=3 ) {
    result = "Moderate Indication of an Anxiety Disorder"
  } else if ( often >=3 ) {
    result = "High Indication of an Anxiety Disorder or ADHD"
  } else if ( v_often >=3 ) {
    result = "High Indication of Non-Neurotypical Behaviour \n An in-person Psychologist Session is strongly recommended."
  }

  const totalQuiz = Quiz.length;
  res.status(201).json(makeResponse(200, "", { result, totalQuiz }));
};