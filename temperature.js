//temperature page values
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

// Template for vars and selectors:
//var inputs = document.getElementsByClassName("input");

// Adding addEventListeners to each input
document.getElementById("celsius").addEventListener("input", temperatureConvert);
document.getElementById("fahrenheit").addEventListener("input", temperatureConvert);

function temperatureConvert() {
    console.log("temperature");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch(inputId) {
        case "celsius":
            console.log("celsius");
            fahrenheit.value = (inputValue)*(9/5)+32;
            break;
        case "fahrenheit":
            console.log("fahrenheit");
            celsius.value = (inputValue)*(5/9)-32;
            break;
    }
}

function reset() {
    var numInputs = document.getElementsByClassName("input")
    for(i=0;i<numInputs.length;i++) {
        numInputs[i].value = "";
    }
}