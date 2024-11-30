import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  elemment = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.elemment.nativeElement.style.textDecoration = 'line-through';
      this.elemment.nativeElement.style.backgroundColor = '#d3f9d8';
      this.elemment.nativeElement.style.color = '#6c757d';
    } else {
      this.elemment.nativeElement.style.textDecoration = 'none';
      this.elemment.nativeElement.style.backgroundColor = '#fff';
      this.elemment.nativeElement.style.color = '#000';
    }
  });
  constructor() {}
}
