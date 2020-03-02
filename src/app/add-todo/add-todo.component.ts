import { Component, OnInit } from '@angular/core';
import { Todo } from './../shared/todo.class'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos: Todo[] = [new Todo('chuja')];
  title = "";

  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    let todo = new Todo(this.title);
    console.log(todo);
    this.todos.push(todo);
  }
}
