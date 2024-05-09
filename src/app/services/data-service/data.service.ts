import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private drawerState= new BehaviorSubject(false)
  currDrawerState= this.drawerState.asObservable();
  constructor() { }
  updateDrawerState(val:boolean){
    this.drawerState.next(val);
  }
}
