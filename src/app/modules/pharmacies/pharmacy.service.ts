import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pharmacy} from "../shared/models/Pharmacy";

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private Url: string = 'http://localhost:8080/api/v1/pharmacies'
  constructor(private httpClient: HttpClient) { }

  getPharmaciesList(): Observable<Pharmacy[]> {
    return this.httpClient.get<Pharmacy[]>(`${this.Url}`);

  }
}
