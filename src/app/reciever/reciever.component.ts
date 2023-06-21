import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reciever',
  template: `
    <p>Data received: {{ receivedData }}</p>
  `,
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {
  receivedData!: string;
  data!: string;
  // private subscription: Subscription;

  constructor(private ds: DataserviceService) {
    // this.subscription = this.dataService.getdata().subscribe((data: string) => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
    // });
    // this.subscription = this.dataService.getdata().subscribe((data: string) => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
    // });
  }

  // ngOnInit(){
  //   this.receivedData = this.dataService.recieve
  //  console.log(this.dataService.recieve);
   
  // }
  fgf(newData: string) {
    return newData
  }

  ngOnInit(): void {
     this.ds.data$.subscribe((newData: string) => {
      this.data = newData;
      console.log(this.data);
    });
    this.fgf("dfefv")
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
