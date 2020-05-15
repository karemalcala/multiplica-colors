import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  getData(query: string): Observable<any> {
    const urlApi = 'https://reqres.in/api/colors';
    return this.Http.get<any>(urlApi + query);
  }
}
