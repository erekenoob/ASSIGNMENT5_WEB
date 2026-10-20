console.log("Student Name: Yertore Omirtayev");
console.log("Group: SE-2530");

function showAlert() {
  alert("Hello, JavaScript World!");
}

if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
  showAlert();
}

let studentName = "Yertore";
let studentAge = 18;
let isActiveStudent = true;

console.log("Name:", studentName, "| Age:", studentAge, "| Active:", isActiveStudent);

let a = 12;
let b = 4;
console.log("Arithmetic operations with", a, "and", b);
console.log("Addition (12 + 4):", a + b);
console.log("Subtraction (12 - 4):", a - b);
console.log("Multiplication (12 * 4):", a * b);
console.log("Division (12 / 4):", a / b);

let greeting = "Hello, " + studentName + "! Welcome to JavaScript basics.";
console.log(greeting);



const changeTextBtn = document.getElementById("changeTextBtn");
if (changeTextBtn) {
  changeTextBtn.addEventListener("click", function () {
    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "But especially Alimzhan Assel!";
  });
}

const changeColorBtn = document.getElementById("changeColorBtn");
const changeFontSizeBtn = document.getElementById("changeFontSizeBtn");
const styleBox = document.getElementById("styleBox");
const boxText = document.getElementById("boxText");

if (changeColorBtn) {
  changeColorBtn.addEventListener("click", function () {
    styleBox.style.backgroundColor = styleBox.style.backgroundColor === "blue" ? "red" : "blue";
  });
}

if (changeFontSizeBtn) {
  changeFontSizeBtn.addEventListener("click", function () {
    boxText.style.fontSize = boxText.style.fontSize === "22px" ? "16px" : "22px";
  });
}

const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const itemList = document.getElementById("itemList");

if (addItemBtn) {
  addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    const count = itemList.children.length + 1;
    newItem.textContent = "Item " + count;
    itemList.appendChild(newItem);
  });
}

if (removeItemBtn) {
  removeItemBtn.addEventListener("click", function () {
    if (itemList.lastElementChild) {
      itemList.lastElementChild.remove();
    } else {
      alert("No items left to remove!");
    }
  });
}



const colorBox = document.getElementById("colorBox");
if (colorBox) {
  colorBox.addEventListener("mouseover", function () {
    colorBox.style.backgroundColor = "#e67e22";
    colorBox.textContent = "Mouse is OVER!";
  });

  colorBox.addEventListener("mouseout", function () {
    colorBox.style.backgroundColor = "#4CAF50";
    colorBox.textContent = "Hover over me!";
  });
}

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

if (liveInput) {
  liveInput.addEventListener("keyup", function () {
    liveOutput.textContent = liveInput.value;
  });
}

function calc(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDisplay = document.getElementById("calcResult");

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Please enter valid numbers";
    return;
  }

  let result = 0;
  if (operation === "+") result = num1 + num2;
  if (operation === "-") result = num1 - num2;
  if (operation === "*") result = num1 * num2;
  if (operation === "/") {
    if (num2 === 0) {
      resultDisplay.textContent = "Cannot divide by zero";
      return;
    }
    result = num1 / num2;
  }

  resultDisplay.textContent = result;
}