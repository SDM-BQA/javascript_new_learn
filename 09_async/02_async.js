/*
// Select the buttons
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let intervalId = null; // To store the interval ID

// Function to log the current timestamp
const logTimestamp = () => {
  console.log(new Date().toLocaleString()); // Log timestamp in a readable format
};

// Start the interval
const startInterval = () => {
  if (!intervalId) {
    intervalId = setInterval(logTimestamp, 1000);
    console.log("Interval started.");
  } else {
    console.log("Interval is already running.");
  }
};

// Stop the interval
const stopInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Interval stopped.");
  } else {
    console.log("No active interval to stop.");
  }
};

// Attach event listeners
startButton.addEventListener("click", startInterval);
stopButton.addEventListener("click", stopInterval);
*/