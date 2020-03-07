import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  {path: 'completed', component: CompletedComponent},
  {path: '', component: AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
