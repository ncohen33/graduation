function CountDown(date) {
	this.diff = function() {return new Date(date - Date.now())};
	this.years = function() {return this.diff().getUTCFullYear() - 1970;}
	this.months = function() {return this.diff().getUTCMonth();}
	this.days = function() {return this.diff().getUTCDate() - 1;}
	this.hours = function() {return this.diff().getUTCHours();}
	this.minutes = function() {return this.diff().getUTCMinutes();}
	this.seconds = function() {return this.diff().getUTCSeconds();}
}

times = ["years", "months", "days", "hours", "minutes", "seconds"];

message = document.getElementById("message");

function update() {
	date = new CountDown(new Date("July 01 2019 00:00:00 GMT-0700 (Pacific Daylight Time)"));

	message.innerHTML = "";
	for (let i=0; i < times.length; i++) {
		if (date[times[i]]() > 0 || times[i] == "seconds") {
			message.innerHTML += "<p>" + times[i] + ": " + date[times[i]]() + "</p>";
		}
	}
}

setInterval(update, 1000);
