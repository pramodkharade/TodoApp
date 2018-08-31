import { Component, OnInit , Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input()
private todo: Todo;
private status:number;
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    const currentDateTime: Date = new Date();
    if(currentDateTime < new Date(this.todo.todotime){
      this.status=1;
    }else{
      this.status=2;
    }
  }
  private removeTodo(): void {
    this.todoService.removeTodos(this.todo.id);
  }
}
