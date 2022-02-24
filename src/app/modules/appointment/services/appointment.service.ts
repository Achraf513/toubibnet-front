import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Appointment from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url="http://localhost:8080/appointment";
  constructor(private http:HttpClient) { }
  
  getAvailableAppointments(doctorId:number,day:number,month:number,year:number):Observable<Date[]>{
    return this.http.get<Date[]>(`${this.url}/available/${doctorId}/${day}/${month}/${year}`);
  }
  addAppointment(appointment:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.url,appointment);
  }
}
