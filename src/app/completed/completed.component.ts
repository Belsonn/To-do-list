import { Component, OnInit } from '@angular/core';
import { Todo } from "./../shared/todo.class";
import { LocalStorageService } from "./../shared/localStorage.service";
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private localStorageService : LocalStorageService) { }
  ngOnInit() {
    this.localStorageService.getLocal();
    this.todos = this.localStorageService.completeTodos
  }


}
