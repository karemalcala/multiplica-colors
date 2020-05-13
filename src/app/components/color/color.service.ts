import { Injectable, OnInit } from '@angular/core';
import { Color } from '../../models/color/color.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private urlApi = 'https://reqres.in/api/colors';

  constructor(private Http: HttpClient) { }

  getColors(): Observable<Color[]> {
    return this.Http.get<Color[]>(this.urlApi);
  }
}
