import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "./../shared/todoData.service";
import { Todo } from "./../shared/todo.class";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  todos: Todo[] = [];
  title: string;
  life: boolean;
  work: boolean;
  school: boolean;
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todos = this.todoDataService.todos;
  }
  onAdd() {
    if (this.title !== "") {
      this.todoDataService.addTodo(
        new Todo(this.title, this.life, this.work, this.school)
      );
    }
  }
  onCompleteNote(index) {
    // let note = this.notes[index];
    // this.notes.splice(index, 1);
    // this.noteCompleted.emit(note);
  }
}
