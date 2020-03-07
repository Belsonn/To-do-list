import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Todo } from './todo.class';

const STORAGE_KEY = 'local_todolist'
const STORAGE_KEY_COMPLETED = 'local_todolistCompleted'

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    todos : Todo[] = [];
    completeTodos: Todo[] = [];
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

    getLocal() {
        this.todos = this.storage.get(STORAGE_KEY) || [];
        this.completeTodos = this.storage.get(STORAGE_KEY_COMPLETED) || [];
    }

    addTodo(todo:Todo){
        this.todos.push(todo);
        this.storage.set(STORAGE_KEY,this.todos);
    }
    deleteTodo(index: number){
        this.todos.splice(index, 1);
        this.storage.set(STORAGE_KEY,this.todos);
    }
    completeTodo(index:number) {
        let todo = this.todos[index];
        todo.completed = true;
        todo.completeDate = Date.now();
        this.todos.splice(index, 1);
        this.completeTodos.push(todo);
        this.storage.set(STORAGE_KEY, this.todos)
        this.storage.set(STORAGE_KEY_COMPLETED, this.completeTodos);
    }
    deleteCompletedTodo(index: number){
        this.completeTodos.splice(index, 1);
        this.storage.set(STORAGE_KEY_COMPLETED, this.completeTodos);
    }
}