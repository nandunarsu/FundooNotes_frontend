import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private httpService:HttpService) { }
  getNotesApi(){
    return this.httpService.NotesApiCall('/Note');
  }
  addNotesApi(data:any){
    return this.httpService.createNotesApiCall('/Note',data);
  }
  archiveNotes(data:any){
    return this.httpService.archiveNotesApiCall(`/Note/isarchived?NoteId=${data}`)
  }
  trashNotes(data:any){
    return this.httpService.archiveNotesApiCall(`/Note/istrashed?NoteId=${data}`)
  }
  colorApi(data:any){
    return this.httpService.colorNotesApiCall(`/Note/addcolour`,data)
  }
  editNoteApi(data:any){
    return this.httpService.editNotesApiCall(`/Note?NoteId=${data.noteId}`,data)
  }

}
