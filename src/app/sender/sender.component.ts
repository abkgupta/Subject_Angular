import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  template: `
  <button (click) = "send()">Send Data</button>
  `,
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  

  constructor(private ds: DataserviceService, private router: Router) { }

  ngOnInit(): void {
  }
   send() {
       this.ds.senddata('Hello from sender component !')
       this.router.navigate(['reciever']);
   }
}
