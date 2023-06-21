import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  // template: `
  // <button (click) = "send()">Send Data</button>
  // `,
  // templateUrl: './sender.component.html',
  template: `
  <button (click)="sendData()">Send Data</button>
  <div *ngFor="let item of data">{{ item }}</div>
`,
  
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  // data: string[] = [];
  data!: string;

  constructor(private ds: DataserviceService, private router: Router) { }

  // ngOnInit(): void {
  // }
  //  send() {
  //      this.ds.senddata('Hello from sender component !')
  //      this.router.navigate(['reciever']);
  //  }
  // sendData() {
  //   const data = 'Data from component';
  //   this.ds.sendData(data);
  // }

  // ngOnInit() {
  //   this.ds.behavesubj.subscribe((data: string) => {
  //     this.data.push(data);
  //   });
  // }
  ngOnInit() {
    // this.ds.data$.subscribe((newData: string) => {
    //   this.data = newData;
    //   console.log(this.data);
    // });
    // this.ds.updateData(this.data)
  }
  sendData() {
    this.ds.updateData("sdfergt")
    this.router.navigate(['reciever'])
  }
}
