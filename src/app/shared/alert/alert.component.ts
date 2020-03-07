import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../todo.class";
import { TodoDataService } from "../todoData.service"
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() todo: Todo
  @Input() index: number
  @Output() close = new EventEmitter<void>();

  constructor(private todoDataService: TodoDataService) {}
  onClose() {
    this.close.emit();
  }
  onDelete() {
    if (!this.todo.completed) {
      this.todoDataService.deleteTodo(this.index);
      this.close.emit();
    }
    else if(this.todo.completed){
      this.todoDataService.deleteCompletedTodo(this.index);
      this.close.emit();
    }

  }
}
