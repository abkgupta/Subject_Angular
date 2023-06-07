import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private datasubject = new Subject<string>();
   recieve:  any
  getdata() {
    console.log(this.datasubject);
    // return this.datasubject.asObservable(); // Return as an Observable to prevent direct modification
    // this.recieve = this.datasubject
    return this.datasubject
  }

  senddata(data: string) {
    this.datasubject.next(data);
    this.recieve = data
    console.log(this.datasubject);
    console.log(data);
  }
}
