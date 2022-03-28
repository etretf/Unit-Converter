
window.onload=function() {
//reset input fields on reload
document.getElementsByClassName("input").value='';

//variable that will store the number of decimal points that the user requests
//default is 3
let decimalNum = 0;
//drop down decimal value
$(document).ready(function(){
    $(".form-select").change(function () {
        decimalNum = $(this).val();
        console.log("changed");
        console.log(decimalNum);
        let changeInputs = document.getElementsByClassName("input");
        for(i=0;i<changeInputs.length;i++) {
            changeInputs[i].value = parseFloat(changeInputs[i].value).toFixed(decimalNum);
        } 
    });
})

//mass page values

let grams = document.getElementById("grams");
let kilograms = document.getElementById("kilograms");
let tons = document.getElementById("tons");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

//speed page values
let mps = document.getElementById("meterPerSecond");
let kph = document.getElementById("kilometerPerHour");
let mph = document.getElementById("MilePerHour");

//volume page values
let milimeterCubed = document.getElementById("milimeterCubed");
let centimeterCubed = document.getElementById("centimeterCubed");
let meterCubed = document.getElementById("meterCubed");
let mililiter = document.getElementById("mililiter")
let liter = document.getElementById("liter");

//distance page values
let millimeter = document.getElementById("millimeter");
let centimeter = document.getElementById("centimeter");
let meter = document.getElementById("meter");
let kilometer = document.getElementById("kilometer");
let inch = document.getElementById("inch");
let feet = document.getElementById("feet");
let yard = document.getElementById("yard");
let mile = document.getElementById("mile");

//time page values
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let day = document.getElementById("day");
let week = document.getElementById("week");
let month = document.getElementById("month");
let year = document.getElementById("year");

//temperature page values
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");


//let inputs = document.getElementsByClassName("input");


//let posibleInputs = document.getElementsByClassName("input")
//document.getElementById("kilograms").addEventListener("input", kale);


let numInputs = document.getElementsByClassName("input")
for(i=0;i<numInputs.length;i++) {
    numInputs[i].addEventListener("input",conversions);
}

function conversions() {
    console.log("conversions");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch(inputId) {
        //mass page
        case "grams":
            console.log("grams");
            kilograms.value = (inputValue/1000);
            tons.value = (inputValue*1.1023e-6);
            pounds.value = (inputValue*0.002204623);
            ounces.value = (inputValue*0.03527396);
            break;
        case "kilograms":
            console.log("kilograms");
            grams.value = (inputValue*1000);
            tons.value = (inputValue*0.001102);
            pounds.value = (inputValue*2.204623);
            ounces.value = (inputValue*35.27396);
            break;
        case "tons":
            console.log("tons");
            grams.value = (inputValue*1000); 
            kilograms.value = (inputValue*100);
            pounds.value = (inputValue*2204.6226);
            ounces.value = (inputValue*35273.962);
            console.log(inputValue);
            break;  
        case "pounds":
            console.log("pounds");
            grams.value = (inputValue*453.59237);
            kilograms.value = (inputValue*0.45359237);
            tons.value = (inputValue*0.00045359237);
            ounces.value = (inputValue*16);
            break;
        case "ounces":
            console.log("ounces");
            grams.value = (inputValue*28.349523);
            kilograms.value = (inputValue*0.028349523);
            tons.value = (inputValue*2.8349523e-5);
            pounds.value = (inputValue*0.0625);
            break;
        
        //Speed Page
        case "meterPerSecond":
            console.log("mps");
            kph.value = (inputValue*3.6);
            mph.value = (inputValue*2.236936);
            break;
        case "kilometerPerHour":
            console.log("kph");
            mps.value = (inputValue*0.2777778);
            mph.value = (inputValue*0.6213712);
            break;
        case "MilePerHour":
            console.log("mph");
            mps.value = (inputValue*0.44704);
            kph.value = (inputValue*1.609344);
            break;

        //volume page
        case "milimeterCubed":
            console.log("mili cubed");
            centimeterCubed.value = (inputValue*0.001);
            meterCubed.value = (inputValue*0.000000001);
            mililiter.value = (inputValue*0.001);
            liter.value = (inputValue*0.000001);
            break;
        case "centimeterCubed":
            console.log("centi cubed");
            milimeterCubed.value = (inputValue*1000);
            meterCubed.value = (inputValue*1e-6);
            mililiter.value = (inputValue*1);
            liter.value = (inputValue*0.001);
            break;
        case "meterCubed":
            console.log("meter cubed");
            milimeterCubed.value = (inputValue*1e+9);
            centimeterCubed.value = (inputValue*1000000);
            mililiter.value = (inputValue*1000000);
            liter.value = (inputValue*1000);
            break;
        case "mililiter":
            console.log("mililiter");
            milimeterCubed.value = (inputValue*1000);
            centimeterCubed.value = (inputValue*1);
            meterCubed.value = (inputValue*1e-6);
            liter.value = (inputValue*0.001);
            break;
        case "liter":
            console.log("liter");
            milimeterCubed.value = (inputValue*1000000);
            centimeterCubed.value = (inputValue*1000);
            meterCubed.value = (inputValue*0.001);
            mililiter.value = (inputValue*1000);
            break;

        //distance page
        case "millimeter":
            console.log("millimeter");
            centimeter.value = (inputValue*0.1);
            meter.value = (inputValue*0.001);
            kilometer.value = (inputValue*0.000001);
            inch.value = (inputValue*0.039370079);
            feet.value= (inputValue*0.0032808399);
            yard.value= (inputValue*0.0010936133);
            mile.value= (inputValue*6.213712e-7);
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
        
        //time page 
        case "second":
            minute.value= inputValue/60;
            hour.value= inputValue/3600;
            day.value=inputValue/86400;
            week.value=inputValue/604800;
            month.value=inputValue/2629800;
            year.value=inputValue/31557600;
            break;
        case "minute":
            second.value=inputValue*60;
            hour.value=inputValue/60;
            day.value=inputValue/1440;
            week.value=inputValue/10080;
            month.value=inputValue/43830;
            year.value=inputValue/525960;
            break;
        case "hour":
            second.value=inputValue*3600;
            minute.value=inputValue*60;
            day.value=inputValue/24
            week.value=inputValue/168;
            month.value=inputValue/730.5;
            year.value=inputValue/8766;
            break;
        case "day":
            second.value=inputValue*604800;
            minute.value=inputValue*10080;
            hour.value=inputValue*168;
            week.value=inputValue/7;
            month.value=inputValue/30.4375;
            year.value=inputValue/365.25;
            break;
        case "week":
            second.value=inputValue*604800;
            minute.value=inputValue*10080;
            hour.value=inputValue*168;
            day.value=inputValue*7;
            month.value=inputValue/4.34524;
            year.value=inputValue/52.17857;
            break;
        case "month":
            second.value=inputValue*2629800;
            minute.value=inputValue*43830;
            hour.value=inputValue*730.5;
            day.value=inputValue*30.4375;
            week.value=inputValue*4.348214;
            year.value=inputValue/12;
            break;
        case "year":
            second.value=inputValue*31557600;
            minute.value=inputValue*525960;
            hour.value=inputValue*8766;
            day.value=inputValue*365.25;
            week.value=inputValue*52.17857;
            month.value=inputValue*12;
            break;

        //temperature values
        case "celsius":
            console.log("celsius");
            fahrenheit.value = ((inputValue)*(9/5)+32);
            break;
        case "fahrenheit":
            console.log("fahrenheit");
            celsius.value = ((inputValue)*(5/9)-32);
            break;
    }  
    var changeInputDecimal = document.getElementsByClassName("input");
    for(i=0;i<changeInputDecimal.length;i++){
        if(changeInputDecimal[i].id != inputId) {
            changeInputDecimal[i].value = parseFloat(changeInputDecimal[i].value).toFixed(decimalNum);
        }
    }
    /*
    let changeInputs = document.getElementsByClassName("input");
        for(i=0;i<changeInputs.length;i++) {
            if (changeInputs[i].value>1000){
                changeInputs[i].value = parseFloat(changeInputs[i].value).toExponential(decimalNum);
            }
        } 
        */
}
}