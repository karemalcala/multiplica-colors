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
  }

  updateTotalPage(input: number): void{
    console.log(input);
    this.totalPage = input;
  }

  updatePageActual(input: number): void{
    console.log(input);
    this.actualPage = input;
  }
}
