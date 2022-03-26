//mass page values
var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var tons = document.getElementById("tons");
var pounds = document.getElementById("pounds");
var ounces = document.getElementById("ounces");


//var inputs = document.getElementsByClassName("input");


//var posibleInputs = document.getElementsByClassName("input")
//document.getElementById("kilograms").addEventListener("input", kale);

//Mass Page
document.getElementById("grams").addEventListener("input", mass);
document.getElementById("kilograms").addEventListener("input", mass);
document.getElementById("tons").addEventListener("input", mass);
document.getElementById("pounds").addEventListener("input", mass);
document.getElementById("ounces").addEventListener("input", mass);


function mass() {
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
/*
function mass() {
    var inputs = document.getElementsByClassName("input");
    for(i=0;i<inputs.length;i++) {
        hid = inputs[i].id;

        switch (hid) {
            case "grams":
                console.log(inputs[i].value);
                kilograms.value = inputs[i].value*3;
                break;
            case "kilograms":
                console.log(inputs[i].value);
                grams.value = inputs[i].value*3;
                console.log("kilograms");
                break;
            case "tons":
                console.log("tons");
                break;
        }
    }
}
/*
for (i=0;i<posibleInputs.length;i++) {
    var newval = posibleInputs[i].value;
    posibleInputs[i].addEventListener("input", ale);
    console.log("helloasa");
    
}


function ale() {
    console.log(event.value);
    console.log(document.getElementById("grams").value);

}

function kale() {
    console.log(document.getElementById("kilograms").className);
    grams.value = document.getElementById("kilograms").value * 2;

}
*/