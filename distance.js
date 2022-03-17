//distance values
var millimeter = document.getElementById("millimeter");
var centimeter = document.getElementById("centimeter");
var meter = document.getElementById("meter");
var kilometer = document.getElementById("kilometer");
var inch = document.getElementById("inch");
var feet = document.getElementById("feet");
var yard = document.getElementById("yard");
var mile = document.getElementById("mile");

//Distance input addEventListeners
document.getElementById("millimeter").addEventListener("input", mass);
document.getElementById("centimeter").addEventListener("input", mass);
document.getElementById("meter").addEventListener("input", mass);
document.getElementById("kilometer").addEventListener("input", mass);
document.getElementById("inch").addEventListener("input", mass);
document.getElementById("feet").addEventListener("input", mass);
document.getElementById("yard").addEventListener("input", mass);
document.getElementById("mile").addEventListener("input", mass);


function distanceConvert() {
    console.log("mass");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch(inputId) {
        case "grams":
            console.log("grams");
            kilograms.value = inputValue/1000;
            tons.value = inputValue*1.1023e-6;
            pounds.value = inputValue*0.002204623;
            ounces.value = inputValue*0.03527396;
            break;
        case "kilograms":
            console.log("kilograms");
            grams.value = (inputValue*1000).toFixed(2);
            tons.value = inputValue*0.001102;
            pounds.value = inputValue*2.204623;
            ounces.value = inputValue*35.27396;
            break;
        case "tons":
            console.log("tons");
            grams.value = inputValue*1000; 
            kilograms.value = inputValue*100;
            pounds.value = (inputValue*2204.6226).toFixed(2);
            ounces.value = inputValue*35273.962;
            console.log(inputValue);
            break;  
        case "pounds":
            console.log("pounds");
            grams.value = inputValue*453.59237;
            kilograms.value = inputValue*0.45359237;
            tons.value = inputValue*0.00045359237;
            ounces.value = inputValue*16;
            break;
        case "ounces":
            console.log("ounces");
            grams.value = inputValue*28.349523;
            kilograms.value = inputValue*0.028349523;
            tons.value = inputValue*2.8349523e-5;
            pounds.value = inputValue*0.0625 ;
            break;
    }
}



function reset() {
    var numInputs = document.getElementsByClassName("input")
    for(i=0;i<numInputs.length;i++) {
        numInputs[i].value = "";
    }
}