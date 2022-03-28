window.onload=function(){
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
document.getElementById("millimeter").addEventListener("input", distanceConvert);
document.getElementById("centimeter").addEventListener("input", distanceConvert);
document.getElementById("meter").addEventListener("input", distanceConvert);
document.getElementById("kilometer").addEventListener("input", distanceConvert);
document.getElementById("inch").addEventListener("input", distanceConvert);
document.getElementById("feet").addEventListener("input", distanceConvert);
document.getElementById("yard").addEventListener("input", distanceConvert);
document.getElementById("mile").addEventListener("input", distanceConvert);


function distanceConvert() {
    console.log("distance");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch(inputId) {
        case "millimeter":
            console.log("millimeter");
            centimeter.value = inputValue*0.1;
            meter.value = inputValue*0.001;
            kilometer.value = inputValue*0.000001;
            inch.value = inputValue*0.039370079;
            feet.value= inputValue*0.0032808399;
            yard.value= inputValue*0.0010936133;
            mile.value= inputValue*6.213712e-7;
            break;
        case "centimeter":
            console.log("centimeter");
            millimeter.value = inputValue*10;
            meter.value = inputValue*0.01;
            kilometer.value = inputValue*0.00001;
            inch.value = inputValue*0.39370079;
            feet.value= inputValue*0.032808399;
            yard.value= inputValue*0.010936133;
            mile.value= inputValue*6.213712e-6;
            break;
        case "meter":
            console.log("meter");
            millimeter.value = inputValue*1000;
            centimeter.value = inputValue*100;
            kilometer.value = inputValue*0.001;
            inch.value = inputValue*39.370079;
            feet.value= inputValue*3.2808399;
            yard.value= inputValue*1.0936133;
            mile.value= inputValue*6.213712e-4;
            break;  
        case "kilometer":
            console.log("kilometer");
            millimeter.value = inputValue*1000000;
            centimeter.value = inputValue*100000;
            meter.value = inputValue*1000;
            inch.value = inputValue*39370.079;
            feet.value= inputValue*3280.8399;
            yard.value= inputValue*1093.6133;
            mile.value= inputValue*0.6213712;
            break;
        case "inch":
             console.log("inch");
            millimeter.value = inputValue*25.4;
            centimeter.value = inputValue*2.54;
            meter.value = inputValue*0.0254;
            kilometer.value = inputValue*0.0000254;
            feet.value= inputValue*0.083333333;
            yard.value= inputValue*0.0277777778;
            mile.value= inputValue*0.000015782828;
            break;
        case "feet":
             console.log("feet");
            millimeter.value = inputValue*304.8;
            centimeter.value = inputValue*30.48;
            meter.value = inputValue*0.3048;
            kilometer.value = inputValue*0.0003048;
            inch.value= inputValue*12;
            yard.value= inputValue*0.33333333333;
            mile.value= inputValue*0.00018939394;
            break;
        case "yard":
             console.log("yard");
            millimeter.value = inputValue*914.4;
            centimeter.value = inputValue*91.44;
            meter.value = inputValue*0.9144;
            kilometer.value = inputValue*0.0009144;
            inch.value= inputValue*36;
            feet.value= inputValue*3;
            mile.value= inputValue*0.00056818182;
            break;
        case "mile":
             console.log("mile");
            millimeter.value = inputValue*1609344;
            centimeter.value = inputValue*160934.4;
            meter.value = inputValue*1609.344;
            kilometer.value = inputValue*1.609344;
            inch.value= inputValue*63360;
            feet.value= inputValue*5280;
            yard.value= inputValue*1760;
            break;
    }
}



function reset() {
    var numInputs = document.getElementsByClassName("input")
    for(i=0;i<numInputs.length;i++) {
        numInputs[i].value = "";
    }
}
}