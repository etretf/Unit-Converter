var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var tons = document.getElementById("tons");
var pounds = document.getElementById("pounds");
var ounces = document.getElementById("ounces");


//var inputs = document.getElementsByClassName("input");

console.log(grams);

//var posibleInputs = document.getElementsByClassName("input")
//document.getElementById("kilograms").addEventListener("input", kale);

document.getElementById("grams").addEventListener("input", checks);
document.getElementById("kilograms").addEventListener("input", checks);
document.getElementById("tons").addEventListener("input", checks);
document.getElementById("pounds").addEventListener("input", checks);
document.getElementById("ounces").addEventListener("input", checks);

function checks() {
    console.log("hello");
    inputId = event.target.id;
    inpuValue = parseFloat(event.target.value);
    switch(inputId) {
        case "grams":
            kilograms.value = inpuValue/1000;
            tons.value = inpuValue*1.1023e-6;
            pounds.value = inpuValue*0.002204623;
            ounces.value = inpuValue*0.03527396;
            console.log(inpuValue);
            break;
        case "kilograms":
            grams.value = (inpuValue*1000).toFixed(decimalNum);
            tons.value = inpuValue*0.001102;
            pounds.value = inpuValue*2.204623;
            ounces.value = inpuValue*35.27396;

            console.log(inpuValue);
            break;
        case "tons":
            console.log(inpuValue);
            break;  
        case "pounds":
            console.log("pounds");
            break;
        case "ounces":
            console.log("ounces");
            break;
    }
}
/*
function checks() {
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