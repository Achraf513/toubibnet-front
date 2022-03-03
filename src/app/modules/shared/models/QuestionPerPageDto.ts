import {Question} from "./Question";

export interface QuestionPerPageDto{
  question: Question[];
  total:number;
}
