import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Color } from '../../models/color/color.interface';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  public colors: Array<Color>;
  public title: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getPageColor();
  }

  getPageColor(){
    this.dataService.getData('').subscribe(data => {
      this.colors = data.data;
      console.log(this.colors);
    });
  }

}
