import { Component, OnInit } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.getColors().subscribe(data => {
      console.log(data);
    });
  }

}
