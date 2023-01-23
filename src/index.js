//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var today = new Date();
var time = today.getHours();
var greet;
var timeOfDayColor;

if (time > 18) {
  greet = "Good evening!";
  timeOfDayColor = "blue";
} else if (time >= 12) {
  greet = "Good afternoon!";
  timeOfDayColor = "green";
} else if (0 < time < 12) {
  greet = "Good morning!";
  timeOfDayColor = "red";
} else {
  greet = "Oops! Broken!";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: timeOfDayColor }}>
    {greet}
  </h1>,
  document.getElementById("root")
);

console.log(time);
