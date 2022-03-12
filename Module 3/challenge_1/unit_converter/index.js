let numToConvert = 0
numToConvert = window.prompt("Enter a number: ");

let numToConvertEl = document.getElementById("numToConvert-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function main() {
    numToConvertEl.textContent = numToConvert
    lengthConvert()
    volumeConvert()
    massConvert()
}

function lengthConvert() {
    let metersToFeets = numToConvert + " meters = " + (numToConvert * 3.28084).toFixed(3) + " feet"
    let feetsToMeters = numToConvert + " feets = " + (numToConvert * 0.3048).toFixed(3) + " meters"
    lengthEl.textContent = metersToFeets + " | " + feetsToMeters
}

function volumeConvert() {
    let litersToGallons = numToConvert + " liters = " + (numToConvert * 0.264172).toFixed(3) + " gallons"
    let gallonsToLiters = numToConvert + " gallons = " + (numToConvert * 3.78541).toFixed(3) + " liters"
    volumeEl.textContent = litersToGallons + " | " + gallonsToLiters
}

function massConvert() {
    let kilosToPounds = numToConvert + " kilos = " + (numToConvert * 2.20462).toFixed(3) + " pounds"
    let poundsToKilos = numToConvert + " pounds = " + (numToConvert * 0.453592).toFixed(3) + " kilos"
    massEl.textContent = kilosToPounds + " | " + poundsToKilos
}

function reset() {
    location.reload()
}

main()