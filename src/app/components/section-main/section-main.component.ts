import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  public colors: Array<number>;
  public title: string;

  constructor() {
    this.colors = [ 1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {
    console.log(this.colors);
  }

}
