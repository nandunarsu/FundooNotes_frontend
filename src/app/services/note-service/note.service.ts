import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private httpService:HttpService) { }
  getApi(){
    return this.httpService.getNotesApiCall('/Note');
  }
}
