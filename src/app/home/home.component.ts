import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, observable } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    // custom Interval Observable
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        if(count===2){
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'))
        }
        observer.next(count)
        count++;
      }, 1000)
    })
    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message)
    }, ()=>{
      console.log('Completed');
    })
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
