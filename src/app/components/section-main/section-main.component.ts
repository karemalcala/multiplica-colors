import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color/color.service';
import { Color } from '../../models/color/color.interface';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  public colors: Array<Color>;
  public title: string;

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.getPageColor();
  }

  getPageColor(){
    this.colorService.getColors().subscribe(data => {
      this.colors = data.data;
      console.log(this.colors);
    });
  }

}
