import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Color } from '../../models/color/color.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  @Output () changeTotalPage = new EventEmitter();
  @Output () changePageActual = new EventEmitter();

  public pageActual: number;
  public totalPage: number;
  public colors: Array<Color>;

  constructor(private dataService: DataService) {
    this.pageActual = 1;
  }

  ngOnInit(): void {
    this.getPageColor();
  }

  getPageColor(): void{
    this.dataService.getData(this.pageActual).subscribe(data => {
      console.log(data);
      this.changeTotalPage.emit(data.total_pages);
      this.changePageActual.emit(this.pageActual);
      this.colors = data.data;
      console.log(this.colors, this.pageActual, this.totalPage);
    });
  }

}
