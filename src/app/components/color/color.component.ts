import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() name: string;
  @Input() year: number;
  @Input() code: string;
  @Input() pantone: string;

  public copy: boolean;

  constructor() {
    this.copy = false;
  }

  ngOnInit(): void {
  }

  copyColor(): void{
    this.copy = true;
    navigator.clipboard.writeText(this.code);

    setTimeout(() => {
      this.copy = false;
    }, 500);
  }

}
