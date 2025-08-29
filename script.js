// ========================
// Part 1: Basics
// ========================
function checkNumber() {
  let num = document.getElementById("userNumber").value;
  let result = document.getElementById("numberResult");

  if (num > 0) {
    result.textContent = `${num} is positive.`;
  } else if (num < 0) {
    result.textContent = `${num} is negative.`;
  } else {
    result.textContent = "It's zero!";
  }
}

// ========================
// Part 2: Functions
// ========================
function addNumbers(a, b) {
  return a + b;
}

function showTotal() {
  let total = addNumbers(5, 10); // reuse function
  document.getElementById("totalResult").textContent = `The total is: ${total}`;
}

// ========================
// Part 3: Loops
// ========================
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before running

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// ========================
// Part 4: DOM Manipulation
// ========================
function changeHeading() {
  document.querySelector("h1").textContent = "Heading Changed with JavaScript!";
}

function toggleColor() {
  document.body.classList.toggle("highlight");
}

function addItem() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item added!";
  ul.appendChild(li);
}

// Optional style toggle
document.head.insertAdjacentHTML("beforeend", `
  <style>
    .highlight { background: lightyellow; }
  </style>
`);
