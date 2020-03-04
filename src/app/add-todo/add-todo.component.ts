import { Component, OnInit } from "@angular/core";
import { Todo } from "./../shared/todo.class";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  todos: Todo[] = [new Todo("Coś do zrobienia")];
  completeTodo: Todo[] = [];
  title = "";
  category: string;
  life;
  work;
  school;
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    if (this.title !== "") {
      let todo = new Todo(this.title);
      todo.items = [];
      if(this.life) {
        todo.items.push("Życie prywatne");
      }
      if(this.work) {
        todo.items.push("Praca");
      }
      if(this.school) {
        todo.items.push("Szkoła");
      }
      console.log(todo);
      this.todos.push(todo);
    }
  }
  checkboxChangeHandler(i) {
    let todo: Todo = this.todos[i];
    this.todos.splice(i, 1);
    todo.completeDate = Date.now();
    this.completeTodo.push(todo);
  }
}
