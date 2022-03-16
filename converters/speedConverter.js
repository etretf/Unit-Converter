//speed page value
var mps = document.getElementById("meterPerSecond");
var kph = document.getElementById("kilometerPerHour");
var mph = document.getElementById("MilePerHour");


//Speed Page
document.getElementById("meterPerSecond").addEventListener("input", speed);
document.getElementById("kilometerPerHour").addEventListener("input", speed);
document.getElementById("MilePerHour").addEventListener("input", speed);

function speed() {
    console.log("speed");
    inputId = event.target.id;
    inputValue = parseFloat(event.target.value);
    switch (inputId) {
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