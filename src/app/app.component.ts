import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public actualPage: number;
  public totalPage: number;

  constructor(){
    this.actualPage = 1;
  }
}
