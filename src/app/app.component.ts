import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchQuery: string;
  todoData: Array<any> = [];
  tempData: Array<any> = [];
  constructor(public todoService: TodoService) {
    this.todoData = todoService.getTodos();
    this.tempData = this.todoData;
  }
  filterData(val) {
    this.todoData = this.tempData.filter((item) => item.text.toLowerCase().search(val.toLowerCase()) !== -1);
  }
}
