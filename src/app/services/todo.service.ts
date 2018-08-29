import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {
  private todos: Todo[];
  private nextId: number;
  constructor() {
    this.todos = [
      new Todo(0, 'Make Dinner tonight!'),
      new Todo(1, 'Make Launch tommorow!')
    ];
    this.nextId = 3;
  }
  public addTodo(text: string): void {
    const todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }
  public getTodos(): Todo[] {
    return this.todos;
  }
  public removeTodos(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}
