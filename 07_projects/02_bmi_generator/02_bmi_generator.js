// height & weight
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
// parseInt

// button
const form = document.querySelector("#form");

//result
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height_val = height.value;
  const weight_val = weight.value;
  if (height_val === "" || height_val < 0 || isNaN(height_val)) {
    result.textContent = `Please Give a valid Value`;
  } else if (weight_val === "" || weight_val < 0 || isNaN(weight_val)) {
    result.textContent = `Please Give a valid Value`;
  } else {
    const value = weight_val / (Math.pow(height_val, 2)/10000);
    result.textContent = value.toFixed(2);
  }
});
