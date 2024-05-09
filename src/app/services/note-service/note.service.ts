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

}
