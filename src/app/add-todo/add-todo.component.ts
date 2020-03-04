import { Component, OnInit } from "@angular/core";
import { Todo } from "./../shared/todo.class";
import { SingleNoteComponent } from "./../single-note/single-note.component";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  notes: SingleNoteComponent[] = [];
  todos: Todo[] = [new Todo("Coś do zrobienia")];
  completeTodo: Todo[] = [];
  title = "";
  category: string;
  life:boolean;
  work:boolean;
  school:boolean;;
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    if (this.title !== "") {
      let todo = new SingleNoteComponent();
      todo.title = this.title;
      if(this.life) {
        todo.items.push("Życie prywatne");
      }
      if(this.work) {
        todo.items.push("Praca");
      }
      if(this.school) {
        todo.items.push("Szkoła");
      }
      todo.createDate = new Date();
      this.notes.push(todo);
    }
  }
  checkboxChangeHandler(i) {
    let todo: Todo = this.todos[i];
    this.todos.splice(i, 1);
    todo.completeDate = Date.now();
    this.completeTodo.push(todo);
  }
}
