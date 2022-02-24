import Doctor from "./Doctor";
import User from "./User";


export default class Appointment{
    id!:number;
    date!:Date;
    user!:User;
    doctor!:Doctor;
    constructor(date:Date,user:User,doctor:Doctor){
        this.date=date;
        this.user=user;
        this.doctor=doctor;
    }
}