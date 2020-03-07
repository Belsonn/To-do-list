import { Component, Input } from "@angular/core";
import { Todo } from "./../shared/todo.class";
import { LocalStorageService } from "./../shared/localStorage.service";
@Component({
  selector: "app-single-note",
  templateUrl: "./single-note.component.html",
  styleUrls: ["./single-note.component.scss"]
})
export class SingleNoteComponent {
  @Input() todo: Todo;
  @Input("index") index: number;
  wantDelete: boolean = false;
  constructor(private localStorageService : LocalStorageService) {}
  onDelete() {
    this.wantDelete = true;
  }
  checkboxChangeHandler() {
    this.localStorageService.completeTodo(this.index);
  }
}
