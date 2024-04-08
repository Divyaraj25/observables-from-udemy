import { Component, OnInit } from '@angular/core';
import { userActivated } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActivated = false;
  private subs:Subscription

  constructor(private userService: userActivated) {}

  ngOnInit() {
    this.subs = this.userService.userActivated.subscribe(activate=>{
      this.isActivated = activate
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }
}
