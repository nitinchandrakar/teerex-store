import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspect-ratio-image',
  templateUrl: './aspect-ratio-image.component.html',
  styleUrls: ['./aspect-ratio-image.component.scss']
})
export class AspectRatioImageComponent implements OnInit {

  @Input()
  src:string;
  @Input()
  alt:string;
  @Input()
  aspectRatio:string;

  constructor() { }

  ngOnInit(): void {
  }

}
