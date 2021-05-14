
// const currentTime = Date.getTime()
const includeTime = document.querySelector("p.bcnTime")
var current = new Date();
includeTime.innerHTML = current.toLocaleTimeString();

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

// const line = document.querySelector(".day-indicator")
// line.innerHTML = formatAMPM(new Date)
// }

function formatAMPM(date) {
  var hours = date.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = ampm;
  return strTime;
}
