"use strict";


const inputLength = document.getElementById("inputLength");
const unitStart = document.getElementById("unitStart");
const unitEnd = document.getElementById("unitEnd");
const resultLength = document.getElementById("resultLength");
let length;

const inputTemp = document.getElementById("inputTemp");
const startTemp = document.getElementById("startTemp");
const endTemp = document.getElementById("endTemp");
const resultTemp = document.getElementById("resultTemp");
let temp;

function convertLength() {

    if (unitStart.value === "Millimeters" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length / 10;
        resultLength.textContent = length.toFixed(5) + " cm";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length / 1000;
        resultLength.textContent = length.toFixed(5) + " m";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 1000000;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 0.03937;
        resultLength.textContent = length.toFixed(5) + " in";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length / 305;
        resultLength.textContent = length.toFixed(5) + " ft";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length / 914.4;
        resultLength.textContent = length.toFixed(5) + " yd";
    }
    else if (unitStart.value === "Millimeters" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 1609344;
        resultLength.textContent = length.toFixed(5) + " mi";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 10;
        resultLength.textContent = length.toFixed(4) + " mm";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length / 100;
        resultLength.textContent = length.toFixed(4) + " m";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 100000;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length / 2.54;
        resultLength.textContent = length.toFixed(4) + " in";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length / 30.48;
        resultLength.textContent = length.toFixed(4) + " ft";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length / 91.44;
        resultLength.textContent = length.toFixed(4) + " yd";
    }
    else if (unitStart.value === "Centimeters" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 160900;
        resultLength.textContent = length.toFixed(4) + " mi";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 1000;
        resultLength.textContent = length.toFixed(3) + " mm";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 100;
        resultLength.textContent = length.toFixed(3) + " cm";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 1000;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 39.37;
        resultLength.textContent = length.toFixed(3) + " in";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length * 3.281;
        resultLength.textContent = length.toFixed(3) + " ft";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length * 1.094;
        resultLength.textContent = length.toFixed(3) + " yd";
    }
    else if (unitStart.value === "Meters" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 1609;
        resultLength.textContent = length.toFixed(3) + " mi";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 1e+6;
        resultLength.textContent = length.toFixed(3) + " mm";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 100000;
        resultLength.textContent = length.toFixed(3) + " cm";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length * 1000;
        resultLength.textContent = length.toFixed(3) + " m";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 39370;
        resultLength.textContent = length.toFixed(3) + " in";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length * 3281;
        resultLength.textContent = length.toFixed(3) + " ft";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length * 1094;
        resultLength.textContent = length.toFixed(3) + " yd";
    }
    else if (unitStart.value === "Kilometers" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 1.609;
        resultLength.textContent = length.toFixed(3) + " mi";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 25.4;
        resultLength.textContent = length.toFixed(2) + " mm";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 2.54;
        resultLength.textContent = length.toFixed(2) + " cm";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length / 39.37;
        resultLength.textContent = length.toFixed(2) + " m";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 39370;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length / 12;
        resultLength.textContent = length.toFixed(2) + " ft";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length / 36;
        resultLength.textContent = length.toFixed(2) + " yd";
    }
    else if (unitStart.value === "Inches" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 63360;
        resultLength.textContent = length.toFixed(2) + " mi";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 304.8;
        resultLength.textContent = length.toFixed(2) + " mm";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 30.48;
        resultLength.textContent = length.toFixed(2) + " cm";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length / 3.281;
        resultLength.textContent = length.toFixed(2) + " m";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 3281;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 12;
        resultLength.textContent = length.toFixed(2) + " in";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length / 3;
        resultLength.textContent = length.toFixed(2) + " yd";
    }
    else if (unitStart.value === "Feet" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 5280;
        resultLength.textContent = length.toFixed(2) + " mi";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 914.4;
        resultLength.textContent = length.toFixed(2) + " mm";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 91.44;
        resultLength.textContent = length.toFixed(2) + " cm";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length / 1.094;
        resultLength.textContent = length.toFixed(2) + " m";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length / 1094;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 36;
        resultLength.textContent = length.toFixed(2) + " in";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length * 3;
        resultLength.textContent = length.toFixed(2) + " ft";
    }
    else if (unitStart.value === "Yards" && unitEnd.value === "Miles") {
        length = Number(inputLength.value);
        length = length / 1760;
        resultLength.textContent = length.toFixed(2) + " mi";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Millimeters") {
        length = Number(inputLength.value);
        length = length * 1.609e+6;
        resultLength.textContent = length.toFixed(2) + " mm";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Centimeters") {
        length = Number(inputLength.value);
        length = length * 160900;
        resultLength.textContent = length.toFixed(2) + " cm";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Meters") {
        length = Number(inputLength.value);
        length = length * 1609;
        resultLength.textContent = length.toFixed(2) + " m";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Kilometers") {
        length = Number(inputLength.value);
        length = length * 1.609;
        resultLength.textContent = length.toFixed(5) + " km";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Inches") {
        length = Number(inputLength.value);
        length = length * 63360;
        resultLength.textContent = length.toFixed(2) + " in";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Feet") {
        length = Number(inputLength.value);
        length = length * 5280;
        resultLength.textContent = length.toFixed(2) + " ft";
    }
    else if (unitStart.value === "Miles" && unitEnd.value === "Yards") {
        length = Number(inputLength.value);
        length = length * 1760;
        resultLength.textContent = length.toFixed(2) + " yd";
    }
    else if (unitStart.value === unitEnd.value) {
        resultLength.textContent = "Please select two different units"
    }
    else {
        resultLength.textContent = "Please select a unit"
    }
}

function clearLength() {
    document.getElementById("lengthForm").reset();
    resultLength.textContent = "";

}

function convertTemp() {
    if (startTemp.value === "Fahrenheit" && endTemp.value === "Celsius") {
        temp = Number(inputTemp.value);
        temp = temp - 32 / 1.8;
        resultTemp.textContent = temp.toFixed(2) + " °C";
    }
    else if (startTemp.value === "Fahrenheit" && endTemp.value === "Kelvin") {
        temp = Number(inputTemp.value);
        temp = (temp - 32) * (5 / 9) + 273.15;
        resultTemp.textContent = temp.toFixed(2) + " K";
    }
    else if (startTemp.value === "Celsius" && endTemp.value === "Fahrenheit") {
        temp = Number(inputTemp.value);
        temp = temp * (9 / 5) + 32;
        resultTemp.textContent = temp.toFixed(2) + " °F";
    }
    else if (startTemp.value === "Celsius" && endTemp.value === "Kelvin") {
        temp = Number(inputTemp.value);
        temp = temp + 273.15;
        resultTemp.textContent = temp.toFixed(2) + " K";
    }
    else if (startTemp.value === "Kelvin" && endTemp.value === "Fahrenheit") {
        temp = Number(inputTemp.value);
        temp = (temp - 273.15) * (9 / 5) + 32;
        resultTemp.textContent = temp.toFixed(2) + " °F";
    }
    else if (startTemp.value === "Kelvin" && endTemp.value === "Celsius") {
        temp = Number(inputTemp.value);
        temp = temp - 273.15;
        resultTemp.textContent = temp.toFixed(2) + " °C";
    }
    else if (startTemp.value === endTemp.value) {
        resultTemp.textContent = "Please choose two different units";
    }
    else {
        resultTemp.textContent = "Please select a unit ";
    }
}

function clearTemp() {
    document.getElementById("tempForm").reset();
    resultTemp.textContent = "";
}