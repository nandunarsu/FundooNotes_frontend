import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/note-service/note.service';

@Component({
  selector: 'app-notescontainer',
  templateUrl: './notescontainer.component.html',
  styleUrls: ['./notescontainer.component.scss']
})
export class NotescontainerComponent implements OnInit {

  notesList:[]=[];

  constructor(private notesService:NoteserviceService) { }

  ngOnInit() {
    this.notesService.getNotesApi().subscribe((res:any)=>this.notesList=res.data,(err=>console.log(err)))
    
  }

}
