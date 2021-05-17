
// // const currentTime = Date.getTime()
// const includeTime = document.querySelector("p.bcnTime")
// var current = new Date();
// includeTime.innerHTML = current.toLocaleTimeString();

// if (!Date.now) {
//   Date.now = function now() {
//     return new Date().getTime();
//   };
// }

// // const line = document.querySelector(".day-indicator")
// // line.innerHTML = formatAMPM(new Date)
// // }

// function formatAMPM(date) {
//   var hours = date.getHours();
//   var ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   var strTime = ampm;
//   return strTime;
// }


function dateToText(date) {
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) minutes = '0'+minutes;
    if (seconds < 10) seconds = '0'+seconds;
    if (hours < 10) hours = '0'+hours;
    return hours + ":" + minutes + ":" + seconds;
}
function updateClocks() {
	for (var i = 0; i < window.arrClocks.length; i++){
		var clock = window.arrClocks[i];
		var offset = window.arrOffsets[i];
		clock.innerHTML = dateToText(new Date(new Date().getTime()+offset));
	}
}
function startClocks() {
	// clockElements = document.querySelector('bcnTime');
  clockElements = document.getElementsByClassName('clock');
	window.arrClocks = []
	window.arrOffsets = [];
	var j = 0;
	for(var i = 0; i < clockElements.length; i++) {
		el = clockElements[i];
		timezone = parseInt(el.getAttribute('timezone'));
		if (!isNaN(timezone)) {
			var tzDifference = timezone * 60 + (new Date()).getTimezoneOffset();
			var offset = tzDifference * 60 * 1000;
			window.arrClocks.push(el);
			window.arrOffsets.push(offset);
		}
	}
	updateClocks();
	clockID = setInterval(updateClocks, 1000);
}
setTimeout(startClocks, 100);