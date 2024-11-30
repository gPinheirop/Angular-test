import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();

  toggle = output<Todo>();

  todoClicked() {
    this.toggle.emit(this.todo());
  }
}