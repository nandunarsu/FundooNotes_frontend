import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  loginApi(data:any){
   return this.httpService.loginsignupApiCall(data, '/Registration/login');
  }
  signupApi(data:any){
    return this.httpService.loginsignupApiCall(data, '/Registration');
  }
}
