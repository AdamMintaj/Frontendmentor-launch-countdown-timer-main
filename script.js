/*Get today's date and set the launch day to 2 days from now*/
var today = new Date().getTime();
var launchDate = new Date(today+172800000);

/*Function gets called every second to calculate time left*/
setInterval(function (){
	/*Calculate time left from now to the launch date*/
	var now = new Date().getTime();
	var timeLeft = launchDate - now;
	
	/*Calculate how many days, hours, minutes and seconds left till launch day */
	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	/*Display time left on screen*/
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

}, 1000);
