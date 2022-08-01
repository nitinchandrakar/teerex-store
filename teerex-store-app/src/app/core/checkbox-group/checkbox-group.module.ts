import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports:[CheckboxGroupComponent],
  declarations: [
    CheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CheckboxGroupModule { }
