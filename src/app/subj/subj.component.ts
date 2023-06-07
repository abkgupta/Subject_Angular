import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subj',
  templateUrl: './subj.component.html',
  styleUrls: ['./subj.component.css']
})
export class SubjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.subject()
    this.subjandbehavsubj()
    // const dataStream$ = new Observable<string>((observer) => {
    //   observer.next('Value 1');
    //   observer.next('Value 2');
    //   observer.next('Value 3');
    //   observer.complete();
    // });

    // dataStream$.subscribe((value: string) => {
    //   console.log(value);
    // });
  }
  subject() {
    const dataSubject = new Subject<string>();

    dataSubject.subscribe((value: string) => {
      console.log('Subscriber 1:', value);
    });

    dataSubject.subscribe((value: string) => {
      console.log('Subscriber 2:', value);
    });

    dataSubject.next('Value 1');
    dataSubject.next('Value 2');
  }
  subjandbehavsubj() {
    const subject = new Subject()

    subject.subscribe(d => console.log(`subscriber1  : ${d}`))
    subject.next(20)
    subject.subscribe(d => console.log(`subscriber2  : ${d}`))
     
    const behv = new  BehaviorSubject<number>(10)
  behv.subscribe(d => console.log(`behsubscriber1  : ${d}`))
  behv.next(20)
  behv.subscribe(d => console.log(`behsubscriber2  : ${d}`))

  }
}
