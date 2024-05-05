import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string="https://localhost:7209/api"

  constructor(private httpClient: HttpClient) { }
  loginsignupApiCall(data:any,endpoint:string){
  return this.httpClient.post(`${this.baseUrl + endpoint}`,data);
  }
}
