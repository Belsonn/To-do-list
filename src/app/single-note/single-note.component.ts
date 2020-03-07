import { Component, OnInit, Input } from "@angular/core";
import { TodoDataService } from "./../shared/todoData.service";
import { Todo } from "./../shared/todo.class";
@Component({
  selector: "app-single-note",
  templateUrl: "./single-note.component.html",
  styleUrls: ["./single-note.component.scss"]
})
export class SingleNoteComponent {
  @Input() todo: Todo;
  @Input("index") index: number;
  wantDelete: boolean = false;
  constructor(private todoDataService: TodoDataService) {}
  onDelete() {
    this.wantDelete = true;
  }
  checkboxChangeHandler() {
    this.todoDataService.completeTodo(this.index);
  }
}
