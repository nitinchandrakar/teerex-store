import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';



@NgModule({
  exports:[
    CardComponent
  ],
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
