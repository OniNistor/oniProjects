"use strict";

//Elements
const lengthSliderEl = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const checkboxLowerEl = document.getElementById("checkbox-lower");
const checkboxUpperEl = document.getElementById("checkbox-upper");
const checkboxNumbersEl = document.getElementById("checkbox-numbers");
const checkboxSymbolsEl = document.getElementById("checkbox-symbols");
const checkboxInputs = document.querySelectorAll(".password-checkbox");
const btnGoEl = document.querySelector(".go");
const btnResetEl = document.querySelector(".reset");
const passwordParaEl = document.getElementById("new-password");
const lowerQty = document.querySelector(".lowerQty");
const upperQty = document.querySelector(".upperQty");
const numberQty = document.querySelector(".numberQty");
const symbolQty = document.querySelector(".symbolQty");
const qtyInputs = document.querySelectorAll(".qty");

//Default Values
let inputQtyTotal = 0;
let lowercaseAmount, uppercaseAmount, numberAmount, symbolAmount;
let passwordLength = 0;
let hasLowercase, hasUppercase, hasNumbers, hasSymbols;

//Get new values and have them reflected in inputQtyTotal
function updateTotal() {
  lowercaseAmount = parseInt(lowerQty.value);
  uppercaseAmount = parseInt(upperQty.value);
  numberAmount = parseInt(numberQty.value);
  symbolAmount = parseInt(symbolQty.value);

  inputQtyTotal =
    lowercaseAmount + uppercaseAmount + numberAmount + symbolAmount;
  updateSlider();
}

//Update slider with new values
function updateSlider(event) {
  passwordLength = inputQtyTotal;
  lengthSliderEl.value = inputQtyTotal;
  sliderValue.textContent = inputQtyTotal;
}

//GO BUTTON
//Display new password or warning if nothing is selected
btnGoEl.addEventListener("click", (event) => {
  if (passwordLength > 0) {
    passwordParaEl.textContent = getNewPassword(
      length,
      hasLowercase,
      hasUppercase,
      hasNumbers,
      hasSymbols
    );
  } else {
    passwordParaEl.textContent = `Password must contain at least one character type`;
  }
});

//RESET BUTTON
//All values and displays to be set back to default
btnResetEl.addEventListener("click", (event) => {
  inputQtyTotal = 0;
  lengthSliderEl.value = 0;
  sliderValue.textContent = "--";
  for (let i = 0; i < checkboxInputs.length; i++) {
    checkboxInputs[i].checked = false;
  }
  passwordParaEl.textContent = "-----";
  hasLowercase = false;
  hasUppercase = false;
  hasNumbers = false;
  hasSymbols = false;
  for (let j = 0; j < qtyInputs.length; j++) {
    qtyInputs[j].value = 0;
    qtyInputs[j].classList.add("hidden");
  }
});

//NUMBER INPUTS
//Anytime an input recieves an update, the new value will be reflected on the slider
lowerQty.addEventListener("change", updateTotal);
upperQty.addEventListener("change", updateTotal);
numberQty.addEventListener("change", updateTotal);
symbolQty.addEventListener("change", updateTotal);

//CHECKBOXES
//If checked, input will display with value of 1
//If not checked, input will not show and value will return to 0
checkboxLowerEl.addEventListener("click", (event) => {
  checkboxLowerEl.checked ? (hasLowercase = true) : (hasLowercase = false);
  lowerQty.classList.toggle("hidden");
  if (lowerQty.classList.contains("hidden")) {
    lowerQty.value = 0;
    updateTotal();
  } else {
    lowerQty.value = 1;
    updateTotal();
  }
});

checkboxUpperEl.addEventListener("click", (event) => {
  checkboxUpperEl.checked ? (hasUppercase = true) : (hasUppercase = false);
  upperQty.classList.toggle("hidden");
  if (upperQty.classList.contains("hidden")) {
    upperQty.value = 0;
    updateTotal();
  } else {
    upperQty.value = 1;
    updateTotal();
  }
});

checkboxNumbersEl.addEventListener("click", (event) => {
  checkboxNumbersEl.checked ? (hasNumbers = true) : (hasNumbers = false);
  numberQty.classList.toggle("hidden");
  if (numberQty.classList.contains("hidden")) {
    numberQty.value = 0;
    updateTotal();
  } else {
    numberQty.value = 1;
    updateTotal();
  }
});

checkboxSymbolsEl.addEventListener("click", (event) => {
  checkboxSymbolsEl.checked ? (hasSymbols = true) : (hasSymbols = false);
  symbolQty.classList.toggle("hidden");
  if (symbolQty.classList.contains("hidden")) {
    symbolQty.value = 0;
    updateTotal();
  } else {
    symbolQty.value = 1;
    updateTotal();
  }
});

//New Password Creation
function getNewPassword(
  length,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSymbols
) {
  lowercaseAmount = lowerQty.value;
  uppercaseAmount = upperQty.value;
  numberAmount = numberQty.value;
  symbolAmount = symbolQty.value;

  //Collections to house character candidates to be used if Password contains specified character
  let usableLowerChars = [];
  let usableUpperChars = [];
  let usableNumberChars = [];
  let usableSymbolChars = [];

  //Potential candidates for each character type
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberChars = "1234567890";
  let symbolChars = "!@#$%^&*+=?.";

  //collect Lowercase candidates and store in respective array
  if (hasLowercase === true && lowercaseAmount > 0) {
    for (let a = 0; a < lowercaseAmount; a++) {
      let randomPickLower = Math.floor(Math.random() * lowercaseChars.length);
      usableLowerChars.push(lowercaseChars[randomPickLower]);
    }
  }
  //collect Uppercase candidates and store in respective array
  if (hasUppercase === true && uppercaseAmount > 0) {
    for (let b = 0; b < uppercaseAmount; b++) {
      let randomPickUpper = Math.floor(Math.random() * uppercaseChars.length);
      usableUpperChars.push(uppercaseChars[randomPickUpper]);
    }
  }
  //collect Number candidates and store in respective array
  if (hasNumbers === true && numberAmount > 0) {
    for (let c = 0; c < numberAmount; c++) {
      let randomPickNumber = Math.floor(Math.random() * numberChars.length);
      usableNumberChars.push(numberChars[randomPickNumber]);
    }
  }
  //collect Symbol candidates and store in respective array
  if (hasSymbols == true && symbolAmount > 0) {
    for (let d = 0; d < symbolAmount; d++) {
      let randomPickSymbol = Math.floor(Math.random() * symbolChars.length);
      usableSymbolChars.push(symbolChars[randomPickSymbol]);
    }
  }
  //Unite all eligible collections of candidates into sinlge array
  let combinedChars = [
    ...usableLowerChars,
    ...usableUpperChars,
    ...usableNumberChars,
    ...usableSymbolChars,
  ];
  //Shuffle all collected candidates and return as one unified item
  for (let z = combinedChars.length - 1; z > 0; z--) {
    let randomIndex = Math.floor(Math.random() * (z + 1));
    let temp = combinedChars[z];
    combinedChars[z] = combinedChars[randomIndex];
    combinedChars[randomIndex] = temp;
  }
  return combinedChars.join("");
}
