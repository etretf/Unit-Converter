//mass page values
var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var tons = document.getElementById("tons");
var pounds = document.getElementById("pounds");
var ounces = document.getElementById("ounces");

//speed page value
var mps = document.getElementById("meterPerSecond");
var kph = document.getElementById("kilometerPerHour");
var mph = document.getElementById("MilePerHour");


//var inputs = document.getElementsByClassName("input");


//var posibleInputs = document.getElementsByClassName("input")
//document.getElementById("kilograms").addEventListener("input", kale);


var numInputs = document.getElementsByClassName("input")
for(i=0;i<numInputs.length;i++) {
    numInputs[i].addEventListener("input",conversions);
}


function conversions() {
    console.log("conversions");
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
        case "meterPerSecond":
            console.log("mps");
            kph.value = inputValue*3.6;
            mph.value = inputValue*2.236936;
            break;
        case "kilometerPerHour":
            console.log("kph");
            mps.value = inputValue*0.2777778;
            mph.value = inputValue*0.6213712;
            break;
        case "MilePerHour":
            console.log("mph");
            mps.value = inputValue*0.44704;
            kph.value = inputValue*1.609344;
            break;
    }
}



function reset() {
    var numInputs = document.getElementsByClassName("input")
    for(i=0;i<numInputs.length;i++) {
        numInputs[i].value = "";
    }
}