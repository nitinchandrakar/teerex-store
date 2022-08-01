import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button.component';

@NgModule({
  exports: [CounterButtonComponent],
  declarations: [CounterButtonComponent],
  imports: [CommonModule],
})
export class CounterButtonModule {}
