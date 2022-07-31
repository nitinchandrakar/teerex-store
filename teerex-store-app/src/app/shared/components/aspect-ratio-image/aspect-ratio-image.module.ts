import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspectRatioImageComponent } from './aspect-ratio-image.component';



@NgModule({
  exports:[
    AspectRatioImageComponent
  ],
  declarations: [
    AspectRatioImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AspectRatioImageModule { }
