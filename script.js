let count = 0;
let counter = document.getElementById("counter");

let incBtn = document.getElementById("incBtn");
let decBtn = document.getElementById("decBtn");
let resetBtn = document.getElementById("resetBtn");

incBtn.addEventListener("click", updateInc);

decBtn.addEventListener("click", updateDec);

resetBtn.addEventListener("click", updateReset);

function updateInc() {
  count = count + 1;
  counter.textContent = count;
}

function updateDec() {
  if (count > 0) {
    count = count - 1;
    counter.textContent = count;
  } else {
    alert("Counter cannot go below zero!");
  }
}

function updateReset() {
  count = 0;
  counter.textContent = count;
}
