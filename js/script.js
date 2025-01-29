"use strict"
/// Element
const utcTime = document.getElementById("utc-time")

// create date
const date = new Date()


// function handling date
function updateUTCTime() {
    utcTime.innerText = "Current Time in UTC: " + date.toUTCString();
}

//Calling the function
updateUTCTime();

//set a timer for 1 sec
setInterval(updateUTCTime, 1000);