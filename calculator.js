let numArray = [];

function inputNumbers(x) {
    numArray.push(x);
    document.getElementById("Screen").innerHTML = x;
    console.log(x)
}

function equalFunction() {
    console.log(numArray);
}
function clearAll() {
    document.getElementById("Screen").textContent = "";
}
function addNumbers() {
    let addNumbers = x + x
    console.log(addNumber);
}