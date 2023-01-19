import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notes: string[] = [];
  newNote = '';
  addNote() {
    this.notes.push(this.newNote);
    this.newNote= '';
  }
  removeNote(index: number) {
    this.notes.splice(index, 1)
  }
}
