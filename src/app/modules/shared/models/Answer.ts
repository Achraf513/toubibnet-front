import {Doctor} from "./Doctor";
import {Question} from "./Question";

export interface Answer {
  id: number,
  doctor: Doctor,
  question: Question,
  description: string,
  dateCreated: Date,
  dateModified: Date
}
