import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'https://reqres.in/api/colors';

  constructor(private Http: HttpClient) { }

  getColors(): Observable<any[any]> {
    return this.Http.get<any[any]>(this.urlApi);
  }
}
