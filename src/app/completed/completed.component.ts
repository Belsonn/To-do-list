import { Component, OnInit } from '@angular/core';
import { SingleNoteComponent } from "./../single-note/single-note.component";
import { TodoDataService } from './../shared/todoData.service';
import { Todo } from "./../shared/todo.class";
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }
  ngOnInit() {
    this.todos = this.todoDataService.completeTodos
  }


}
