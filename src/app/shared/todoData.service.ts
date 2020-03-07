import { Injectable } from '@angular/core';
import { Todo } from './todo.class';
@Injectable({providedIn: 'root'})
export class TodoDataService {
    todos : Todo[] = [];
    completeTodos: Todo[] = [];

    addTodo(todo:Todo){
        this.todos.push(todo);
    }
    deleteTodo(index: number){
        this.todos.splice(index, 1);
    }
}