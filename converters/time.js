window.onload=function(){
    //temperature page values
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var day = document.getElementById("day");
var week = document.getElementById("week");
var month = document.getElementById("month");
var year = document.getElementById("year");


// Template for vars and selectors:
//var inputs = document.getElementsByClassName("input");

// Adding addEventListeners to each input
document.getElementById("second").addEventListener("input", timeConvert);
document.getElementById("minute").addEventListener("input", timeConvert);
document.getElementById("hour").addEventListener("input", timeConvert);
document.getElementById("day").addEventListener("input", timeConvert);
document.getElementById("week").addEventListener("input", timeConvert);
document.getElementById("month").addEventListener("input", timeConvert);
document.getElementById("year").addEventListener("input", timeConvert);


function timeConvert() {
    console.log("time");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch(inputId) {
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
            
    }
}

function reset() {
    var numInputs = document.getElementsByClassName("input")
    for(i=0;i<numInputs.length;i++) {
        numInputs[i].value = "";
    }
}
}


