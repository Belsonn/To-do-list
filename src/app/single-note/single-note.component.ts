import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent {
    @Input('title') title: string
    completed: boolean
    @Input('createDate') createDate
    completeDate
    @Input('items') items: String[] = [];
    constructor() {
    }

}
