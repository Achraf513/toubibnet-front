import { ESpecialty } from "./enum/ESpecialty";

export interface Question{
    id:number,
    userId:number,
    specialty:ESpecialty,
    description:string,
    date:Date
}
