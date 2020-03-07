import { Component, OnInit } from "@angular/core";
import { Todo } from "./../shared/todo.class";
import { LocalStorageService } from "./../shared/localStorage.service";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  todos: Todo[] = [];
  title: string = "";
  life: boolean;
  work: boolean;
  school: boolean;
  constructor(private localStorageService : LocalStorageService) {}

  ngOnInit(): void {
    //this.todos = this.todoDataService.todos;
    this.localStorageService.getLocal();
    this.todos = this.localStorageService.todos;
  }
  onAdd() {
    if (this.title != "") {
      this.localStorageService.addTodo(
        new Todo(this.title, this.life, this.work, this.school)
      );
    }
  }
}
