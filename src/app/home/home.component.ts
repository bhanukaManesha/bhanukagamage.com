import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	timeLeft : String;
	interval;

	countDownDate = new Date("Jan 6, 2020 00:00:00").getTime();


  constructor() { 
  	this.startTimer()
  }

  ngOnInit() {

  }

  startTimer() {
    this.interval = setInterval(() => {
      	// Get todays date and time
		var now = new Date().getTime();
		  
		// Find the distance between now an the count down date
		var distance = this.countDownDate - now;
		  
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		  this.timeLeft = days + "d " + hours + "h "
		  + minutes + "m " + seconds + "s ";
		  
		  // If the count down is over, write some text 
		  if (distance < 0) {
		    clearInterval(this.interval);
		    this.timeLeft = "Expired"
		  }


    },1000)
  }

}
