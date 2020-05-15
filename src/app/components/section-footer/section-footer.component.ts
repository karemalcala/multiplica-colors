import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent implements OnInit {

  @Input() actualPage: number;
  @Input() totalPage: number;

  constructor() { }

  ngOnInit(): void {
  }

  next(): number{
    console.log(`En next: estoy ${this.actualPage}, voy a ${this.totalPage}`);
    if (this.actualPage < this.totalPage) return this.actualPage += 1;
  }

  previous(): number{
    console.log(`En previos: estoy ${this.actualPage}, voy a ${this.actualPage - 1}`);
    if (this.actualPage > 1) return this.actualPage -= 1;
  }

}
