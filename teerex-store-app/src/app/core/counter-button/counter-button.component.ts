import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  @Input()
  value: number = 0;

  @Input()
  maxValue: number;

  @Output()
  onIncrement = new EventEmitter();

  @Output()
  onDecrement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  decrement(event) {
    event.preventDefault();
    if (this.value > 0) {
      this.value--;
      this.onDecrement.emit(this.value);
    }
  }

  increment(event) {
    event.preventDefault();
    if (this.maxValue && this.maxValue == this.value) {
      return;
    }
    this.value++;
    this.onIncrement.emit(this.value);
  }
}
