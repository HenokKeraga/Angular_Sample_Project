import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSubscription: Subscription

  constructor(private  media: MediaObserver) {
  }

  ngOnInit(): void {
    this.mediaSubscription = this.media.asObservable().subscribe((change: MediaChange[]) => {
      console.log(change);
    })

  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

}
