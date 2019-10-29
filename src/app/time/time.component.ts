import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  public deadline: any;
  public now: any
  public timeRemaining: any;

  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;

  public expired: string;

  public ndate: any;
  public newDate: any;
  public finalDate: any;
  public targetDate: any;

  public remainingDays: any;

  constructor() {
    this.deadline = new Date("oct 31, 2019 14:30:00").getTime()

    let x = setInterval(function () {


    }, 1000)
    // this.ndate = new Date()
    // this.targetDate = new Date("2019-10-31")
  }

  ngOnInit() {

    this.timer()
    console.log(this.timeRemaining, this.days, this.hours, this.minutes, this.seconds)
  }

  timer() {
    setInterval(() => {
      this.now = new Date().getTime()

      this.timeRemaining = this.deadline - this.now
      this.days = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000)
    }, 1000)
    // this.now = new Date().getTime()

    // this.timeRemaining = this.deadline - this.now
    // this.days = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24))
    // this.hours = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    // this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000)

    // // If the count down is finished, write some text
    // if (this.timeRemaining < 0) {
    //   clearInterval(x);
    //   if (this.days == 0) {
    //     if (this.hours == 0) {
    //       if (this.minutes == 0) {
    //         if (this.seconds == 0) {
    //           this.expired = 'EXPIRED'
    //         }
    //       }
    //     }
    //   } 
    // }
  }

}
