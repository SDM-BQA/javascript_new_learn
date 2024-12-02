const container = document.querySelector("#container");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const clr = document.querySelector("#color-code");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
};

let interValId = null;

start.addEventListener("click", () => {
  if (!interValId) {
    interValId = setInterval(() => {
      let color = randomColor();
      container.style.backgroundColor = color;
      clr.innerHTML = color;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  if (interValId) {
    clearInterval(interValId);
    interValId = null;
  }
});
