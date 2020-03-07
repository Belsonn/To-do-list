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
    completeTodo(index:number) {
        let todo = this.todos[index];
        todo.completed = true;
        todo.completeDate = Date.now();
        this.todos.splice(index, 1);
        this.completeTodos.push(todo);
    }
    deleteCompletedTodo(index: number){
        this.completeTodos.splice(index, 1);
    }
}