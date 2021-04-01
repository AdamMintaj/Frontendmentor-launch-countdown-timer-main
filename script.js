/*This animated flipcard timer is not an optimal solution but it's the best
I could come up with without copypasting code from the Internet. Main issue
I noticed so far is the clock sometimes skips one number and flashes the next
twice. This occurs mainly in Edge and Chrome, much less in Firefox but I've
got no idea why. Probably something with timeout function. */

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

	var variables = [days, hours, minutes, seconds];
	var variables_names = ["days", "hours", "minutes", "seconds"];
	var overlays = document.querySelectorAll(".card-overlay");

	/*Start the flip card animation for seconds*/
	overlays[3].classList.toggle("animation");	

	/*Trigger flip card animation for days, hours or minutes*/
	for(i=0; i<3; i++)
	{
		if(variables[i+1] == 59 & variables[3] == 59)
		overlays[i].classList.toggle("animation");
	}

	/*Display time left on screen*/
	for(i=0; i<variables.length; i++)
	{
		document.getElementById(variables_names[i]+"-top").innerHTML = variables[i];
		document.getElementById(variables_names[i]+"-overlay-back").innerHTML = variables[i];
	}

	/*Timeout creates delay to make the change look smoothly*/
	setTimeout(function(){

		/*Stop the flip card animation*/
		for(i=0; i<overlays.length; i++)
		{
			if(overlays[i].classList.contains("animation"))
			overlays[i].classList.toggle("animation");
		}

		for(i=0; i<variables.length; i++)
			{
				document.getElementById(variables_names[i]+"-bottom").innerHTML = variables[i];
				document.getElementById(variables_names[i]+"-overlay-front").innerHTML = variables[i];
			}

	}, 800);

}, 1000);
