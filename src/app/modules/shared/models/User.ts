import { Role } from './Role';
export interface User{
    id:number,
    firstName:String,
    lastName:String,
    phoneNumber:String,
    email:String,
    password:String,
    roles:Role[]
}
