import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  // constructor() {}
  getTodoFromApi() {
    return this.http.get<Array<Todo>>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
