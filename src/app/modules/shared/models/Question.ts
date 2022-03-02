import {User} from "./User";

export interface Question{
  id: number,
  user: User,
  title: string,
  content: string,
  dateCreated: Date,
  dateModified: Date,
  category: string
}
