import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { CardModule } from '@app/shared/components/card/card.module';



@NgModule({
  exports:[
    FilterComponent
  ],
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class FilterModule { }
