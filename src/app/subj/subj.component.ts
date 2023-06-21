import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

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
    this.replaysubj()
    this.AsyncSubj()
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
    //   const subject = new Subject()

    //   subject.subscribe(d => console.log(`subscriber1  : ${d}`))
    //   subject.next(20)
    //   subject.subscribe(d => console.log(`subscriber2  : ${d}`))

    //   const behv = new  BehaviorSubject<number>(10)
    // behv.subscribe(d => console.log(`behsubscriber1  : ${d}`))
    // behv.next(20)
    // behv.subscribe(d => console.log(`behsubscriber2  : ${d}`))
    //
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
      subject.next(3)
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    // subject.next(1);
    // subject.next(2);
    //   subject.next(3)
    subject.next(4);
  }
  replaysubj(){
    const replaySubject = new ReplaySubject<string>(2);

// Subscribe to the ReplaySubject
replaySubject.subscribe((value) => {
  console.log('Received value:', value);
});

// Emit values
replaySubject.next('Value 1');
replaySubject.next('Value 2');
replaySubject.next('Value 3');

// Subscribe again to the ReplaySubject
replaySubject.subscribe((value) => {
  console.log('Received value (new subscriber):', value);
});
  }
  AsyncSubj(){
    const asyncSubject = new AsyncSubject<string>();

// Subscribe to the AsyncSubject
asyncSubject.subscribe((value) => {
  console.log('Received value:', value);
});

// Emit values
asyncSubject.next('Value 1');
asyncSubject.next('Value 2');
asyncSubject.next('Value 3');

// Complete the AsyncSubject
asyncSubject.complete();
  }
}
