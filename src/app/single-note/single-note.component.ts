import { Component, OnInit, Input} from '@angular/core';
import { TodoDataService } from './../shared/todoData.service';
import { Todo } from "./../shared/todo.class";
@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent {
    @Input() todo : Todo
    @Input('index') index: number;
    constructor(private todoDataService: TodoDataService) {
    }
    onDelete(){
     this.todoDataService.deleteTodo(this.index);
    }
    checkboxChangeHandler() {
      this.todo.completeDate = Date.now();
    }

}
