import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scheduler } from './scheduler';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private baseURL = "http://localhost:8080/schedulers";

  constructor(private httpClient: HttpClient) { }

  getSchedulerList(): Observable<Scheduler[]> {
    return this.httpClient.get<Scheduler[]>(this.baseURL);
  }

  createScheduler(scheduler: Scheduler): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, scheduler);
  }

  getSchedulerById(id?: number): Observable<Scheduler> {
    return this.httpClient.get<Scheduler>(`${this.baseURL}/${id}`);
  }

  updateScheduler(id?: number, scheduler?: Scheduler): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, scheduler);
  }

  deleteScheduler(id?: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
