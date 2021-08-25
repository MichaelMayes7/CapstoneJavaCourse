import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseURL = "http://localhost:8080/plants";

  constructor(private httpClient: HttpClient) { }

  getPlantList(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(this.baseURL);
  }

  createPlant(plant: Plant): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, plant);
  }

  getPlantById(id?: number): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.baseURL}/${id}`);
  }

  updatePlant(id?: number, plant?: Plant): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, plant);
  }

  deletePlant(id?: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
