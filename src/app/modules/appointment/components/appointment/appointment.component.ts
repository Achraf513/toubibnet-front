import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import { PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

}
