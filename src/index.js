import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2019, 1, 1, 16);
const currentTime = date.getHours();

let greeting;

const customeStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "good morning";
  customeStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "good afternoon";
  customeStyle.color = "green";
} else {
  greeting = "good night";
  customeStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customeStyle}>{greeting}</h1>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
