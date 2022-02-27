import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pharmacy } from "../shared/models/Pharmacy";

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private Url: string = 'http://localhost:8080/api/v1/pharmacies'
  constructor(private httpClient: HttpClient) { }

  getPharmaciesList(): Observable<Pharmacy[]> {
    return this.httpClient.get<Pharmacy[]>(`${this.Url}`);
  }

  createPharmacy(pharmacy: Pharmacy): Observable<Object> {
    return this.httpClient.post(`${this.Url}`, pharmacy);
  }
  updatePharmacy(id: number, pharmacy: Pharmacy): Observable<object> {
    return this.httpClient.put(`${this.Url}/${id}`, pharmacy)
  }
  deletePharmacy(id: number): Observable<any> {
    return this.httpClient.delete(`${this.Url}/${id}`);
  }
  getPharmacy(id: number): Observable<any> {
    return this.httpClient.get(`${this.Url}/${id}`);
  }
}
