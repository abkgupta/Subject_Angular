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
  // private subscription: Subscription;

  constructor(private dataService: DataserviceService) {
    // this.subscription = this.dataService.getdata().subscribe((data: string) => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
    // });
    // this.subscription = this.dataService.getdata().subscribe((data: string) => {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
    // });
  }

  ngOnInit(){
    this.receivedData = this.dataService.recieve
   console.log(this.dataService.recieve);
   
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
