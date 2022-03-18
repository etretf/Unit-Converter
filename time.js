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
            hour.value= inputValue;
            day.value=inputValue;
            week.value=inputValue;
            month.value=inputValue;
            year.value=inputValue;
            break;
        case "minute":
            second.value=inputValue*60;
            hour.value=inputValue;
            day.value=inputValue;
            week.value=inputValue;
            month.value=inputValue;
            year.value=inputValue;
            break;
        case "hour":
            second.value=inputValue*60;
            minute.value=inputValue;
            day.value=inputValue;
            week.value=inputValue;
            month.value=inputValue;
            year.value=inputValue;
            break;
        case "day":
            second.value=inputValue;
            minute.value=inputValue;
            hour.value=inputValue;
            week.value=inputValue;
            month.value=inputValue;
            year.value=inputValue;
            break;
        case "week":
            second.value=inputValue;
            minute.value=inputValue;
            hour.value=inputValue;
            day.value=inputValue;
            month.value=inputValue;
            year.value=inputValue;
            break;
        case "month":
            second.value=inputValue;
            minute.value=inputValue;
            hour.value=inputValue;
            day.value=inputValue;
            week.value=inputValue;
            year.value=inputValue;
            break;
        case "year":
            second.value=inputValue;
            minute.value=inputValue;
            hour.value=inputValue;
            day.value=inputValue;
            week.value=inputValue;
            month.value=inputValue;
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


