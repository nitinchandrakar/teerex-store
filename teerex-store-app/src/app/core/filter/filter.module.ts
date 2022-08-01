import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { CardModule } from '@app/shared/components/card/card.module';
import { CheckboxGroupModule } from '../checkbox-group/checkbox-group.module';



@NgModule({
  exports:[
    FilterComponent
  ],
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CheckboxGroupModule
  ]
})
export class FilterModule { }
