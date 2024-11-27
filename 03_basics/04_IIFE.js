// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log("DB Connected");
})();

// sometime there is pollution in global scope so to avoid that we use IIFE

(() => {
  console.log("arrow");
})();

((name) => {
    console.log(`arrow ${name}`);
})('function');
