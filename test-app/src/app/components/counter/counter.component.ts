import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterValue = signal(0);

  incrementHandler() {
    this.counterValue.update((value) => value + 1);
  }

  decrementHandler() {
    this.counterValue.update((value) => value - 1);
  }

  resetHandler() {
    this.counterValue.set(0);
  }
}
