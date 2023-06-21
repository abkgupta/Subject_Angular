import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private datasubject = new Subject<string>();
  public behavesubj = new BehaviorSubject<string>("dwfe")
  data$ = this.behavesubj.asObservable()
   recieve:  any
  // getdata() {
  //   console.log(this.datasubject);
  //   // return this.datasubject.asObservable(); // Return as an Observable to prevent direct modification
  //   // this.recieve = this.datasubject
  //   return this.datasubject     // original 
  // }
  // getdata() {
  //   console.log(this.datasubject);
  //   console.log(this.behavesubj);
    
  //   // return this.datasubject.asObservable(); // Return as an Observable to prevent direct modification
  //   // this.recieve = this.datasubject
  //   return this.behavesubj 
  // }

  // senddata(data: string) {
  //   // this.datasubject.next(data);
  //   // this.recieve = data
  //   // console.log(this.datasubject);
  //   // console.log(data);
  //   this.behavesubj.next(data)
  //   console.log(this.behavesubj);
  // }
  
  updateData(newData: string) {
    this.behavesubj.next(newData);
  }
}
