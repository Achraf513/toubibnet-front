import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/modules/shared/models/Doctor';
import Appointment from '../../models/Appointment';
import { AppointmentService } from '../../services/appointment.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  doctorId!:number;
  doctor!:Doctor;
  date=new Date();
  invalidDates: Array<Date>=[];
  availableDates: Date[]=[];
  selectedTime!:Date;
  
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    for(let i=0;i<30;i++){
      let invalidDate = new Date();
      invalidDate.setDate(new Date().getDate() - i-1)
      this.invalidDates.push(invalidDate);
    }
    this.route.params.subscribe((params)=>{
      console.log(params)
      let id=params['id'];
      this.doctorId=id;
      this.getDoctor(id);
    })
  }
  getDoctor(id:number){
    this.appointmentService.getDoctor(id).subscribe((response:Doctor)=>{
      this.doctor=response;
    })
  }
  formatDate(date:Date):string{
    date=new Date(date);
    let hour=date.getHours();
    let minute=date.getMinutes().toString();
    if(minute=='0') minute='00';
    let formatedDate=`${hour}:${minute}`;
    return formatedDate;
  }
  onDateSelected(){
    this.availableDates=[];
    let day=this.date.getDate();
    let month=this.date.getMonth()+1;
    let year=this.date.getFullYear();
    this.appointmentService.getAvailableAppointments(this.doctorId,day,month,year).subscribe((response:Date[])=>{
      this.availableDates=response;
    });
  }
  addAppointment(date:Date){
    let user:any={
      id: 1

    };
    let appointment=new Appointment(date,user,this.doctor);
    console.log(appointment)
    this.appointmentService.addAppointment(appointment).subscribe((response)=>{
      console.log(response);
    })
  }

  

}
