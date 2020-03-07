import { Component, OnInit } from '@angular/core';
import { SingleNoteComponent } from "./../single-note/single-note.component";
import { TodoDataService } from './../shared/todoData.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  notes: SingleNoteComponent[] = [];

  constructor(private todoDataService: TodoDataService) { }
  onNoteCompleted(note: SingleNoteComponent){
    this.notes.push(note);
  }


}
