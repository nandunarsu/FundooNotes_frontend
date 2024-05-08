import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string="https://localhost:7209/api"
  header= new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('AuthToken')}` || ""
  })

  constructor(private httpClient: HttpClient) { }
  loginsignupApiCall(data:any,endpoint:string){
  return this.httpClient.post(`${this.baseUrl + endpoint}`,data);
  }
  getNotesApiCall(endpoint:string){
    return this.httpClient.get(`${this.baseUrl + endpoint}`,{headers:this.header});
  }
}
