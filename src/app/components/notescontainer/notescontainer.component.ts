import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-notescontainer',
  templateUrl: './notescontainer.component.html',
  styleUrls: ['./notescontainer.component.scss']
})
export class NotescontainerComponent implements OnInit {

  notesList:any[]=[];

  constructor(private notesService:NoteserviceService) { }

  ngOnInit() {
    this.notesService.getNotesApi().subscribe(
      (res: any) => {
        this.notesList = res.data.filter(
          (note: any) => note.isArchived == false && note.isDeleted == false
        );
      },
      (err) => console.log(err)
    );
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNotes') {
      this.notesList.push($event);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.notesList = this.notesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    }
    else if($event.action == 'colour' || $event.action == 'edit'){
      this.notesList = this.notesList.map((note: any) => {
        if(note.noteId == $event.data.noteId){
          return $event.data 
        }
        return note

      })
    }
  }

}
