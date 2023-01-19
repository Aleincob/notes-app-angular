import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNoteComponent} from './components/add-note/add-note.component';
import {BoxNoteComponent} from './components/box-note/box-note.component';
import { AddNoteService } from './add-note.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AddNoteComponent, BoxNoteComponent],
  bootstrap: [AppComponent],
  providers: [AddNoteService]
})
export class AppModule {}
