"use strick";

//elements
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

let inputQtyTotal = Number(
  lowerQty.value + upperQty.value + numberQty.value + symbolQty.value
);

let lowercaseAmount, uppercaseAmount, numberAmount, symbolAmount;
let passwordLength =
  lowercaseAmount + uppercaseAmount + numberAmount + symbolAmount;
let hasLowercase, hasUppercase, hasNumbers, hasSymbols;

function updateSlider() {
  inputQtyTotal =
    Number(lowerQty.value) +
    Number(upperQty.value) +
    Number(numberQty.value) +
    Number(symbolQty.value);
  passwordLength = inputQtyTotal;
  lengthSliderEl.value = inputQtyTotal;
  sliderValue.textContent = inputQtyTotal;
}

function warningChecks() {
  let warnings = [];

  if (hasLowercase === true && lowerQty === 0) {
    warnings.push(`Invalid Qty (Lowercase)`);
  }
  if (hasUppercase === true && upperQty === 0) {
    warnings.push(`Invalid Qty (Uppercase)`);
  }
  if (hasNumbers === true && numberQty === 0) {
    warnings.push(`Invalid Qty (Numbers)`);
  }
  if (hasSymbols === true && symbolQty === 0) {
    warnings.push(`Invalid Qty (Symbols)`);
  }
  if (warnings.length > 0) {
    passwordParaEl.textContent = warnings.join("\n");
  }
}

for (let y = 0; y < qtyInputs.length; y++) {
  qtyInputs[y].addEventListener("input", updateSlider);
}

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
  warningChecks();
});

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

// lengthSliderEl.addEventListener("input", (event) => {
//   passwordLength = qtyInputs.value;
// });

checkboxLowerEl.addEventListener("click", (event) => {
  checkboxLowerEl.checked ? (hasLowercase = true) : (hasLowercase = false);
  lowerQty.classList.toggle("hidden");
  if (lowerQty.classList.contains("hidden")) {
    lowerQty.value = 0;
  }
});

checkboxUpperEl.addEventListener("click", (event) => {
  checkboxUpperEl.checked ? (hasUppercase = true) : (hasUppercase = false);
  upperQty.classList.toggle("hidden");
  if (upperQty.classList.contains("hidden")) {
    upperQty.value = 0;
  }
});

checkboxNumbersEl.addEventListener("click", (event) => {
  checkboxNumbersEl.checked ? (hasNumbers = true) : (hasNumbers = false);
  numberQty.classList.toggle("hidden");
  if (numberQty.classList.contains("hidden")) {
    numberQty.value = 0;
  }
});

checkboxSymbolsEl.addEventListener("click", (event) => {
  checkboxSymbolsEl.checked ? (hasSymbols = true) : (hasSymbols = false);
  symbolQty.classList.toggle("hidden");
  if (symbolQty.classList.contains("hidden")) {
    symbolQty.value = 0;
  }
});

//display length to match slider
function showVal(newVal) {
  sliderValue.innerHTML = newVal;
}

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

  let usableLowerChars = [];
  let usableUpperChars = [];
  let usableNumberChars = [];
  let usableSymbolChars = [];

  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberChars = "1234567890";
  let symbolChars = "!@#$%^&*+=?.";

  if (hasLowercase === true && lowercaseAmount > 0) {
    for (let a = 0; a < lowercaseAmount; a++) {
      let randomPickLower = Math.floor(Math.random() * lowercaseChars.length);
      usableLowerChars.push(lowercaseChars[randomPickLower]);
    }
  }

  if (hasUppercase === true && uppercaseAmount > 0) {
    for (let b = 0; b < uppercaseAmount; b++) {
      let randomPickUpper = Math.floor(Math.random() * uppercaseChars.length);
      usableUpperChars.push(uppercaseChars[randomPickUpper]);
    }
  }

  if (hasNumbers === true && numberAmount > 0) {
    for (let c = 0; c < numberAmount; c++) {
      let randomPickNumber = Math.floor(Math.random() * numberChars.length);
      usableNumberChars.push(numberChars[randomPickNumber]);
    }
  }

  if (hasSymbols == true && symbolAmount > 0) {
    for (let d = 0; d < symbolAmount; d++) {
      let randomPickSymbol = Math.floor(Math.random() * symbolChars.length);
      usableSymbolChars.push(symbolChars[randomPickSymbol]);
    }
  }

  let combinedChars = [
    ...usableLowerChars,
    ...usableUpperChars,
    ...usableNumberChars,
    ...usableSymbolChars,
  ];

  for (let z = combinedChars.length - 1; z > 0; z--) {
    let randomIndex = Math.floor(Math.random() * (z + 1));
    let temp = combinedChars[z];
    combinedChars[z] = combinedChars[randomIndex];
    combinedChars[randomIndex] = temp;
  }
  return combinedChars.join("");
}
// if (usableChars.length === 0) {
//   return `Password must contain at least ONE character type.`;
// } else if (qtyInputs.value === 0) {
//   return `Please specific how many of at least ONE character type.`;
// }

//   let password = [];
//   for (i = 0; i < length; i++) {
//     let randomSelection = Math.floor(Math.random() * usableChars.length);
//     password += usableChars[randomSelection];
//   }
//   return password;
// }
