const sayChai = () => {
  console.log("Chaiiiiiii");
};

setTimeout(sayChai, 2000);

const chgText = () => {
  document.querySelector("h1").innerHTML = "Chai Project";
};
setTimeout(chgText, 3000);

// remove event
document.querySelector("#btn").addEventListener("click", () => {
  clearTimeout(chgText);
  console.log("stopppppppp");
});
