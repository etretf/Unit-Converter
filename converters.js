//window onload function to make sure html is loaded before the js begins
window.onload=function() {

//variable that will store the number of decimal points that the user requests
//default is 3
let decimalNum = 3;
console.log(decimalNum)
//drop down menu for the decimal values
//dropdown menu value extraction was referenced from stackoverflow https://stackoverflow.com/questions/10659097/jquery-get-selected-option-from-dropdown
$(document).ready(function(){
    //jquery will monitor if a decimal value from the dropdown menu was selected
    $(".form-select").change(function () {
        //changing the decimalNum to the decimal value that is selected from the dropdown menu
        decimalNum = $(this).val();
        //getting all of the inputs from the html and storing them under changeInputs
        let changeInputs = document.getElementsByClassName("input");
        //looping through all of the input fields
        for(i=0;i<changeInputs.length;i++) {
            //changing all of the input fields to display the number of decimal points that the user selected
            changeInputs[i].value = parseFloat(changeInputs[i].value).toFixed(decimalNum);
        } 
    });
})

//getting mass page input values
let grams = document.getElementById("grams");
let kilograms = document.getElementById("kilograms");
let tons = document.getElementById("tons");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

//getting speed page input values
let mps = document.getElementById("meterPerSecond");
let kph = document.getElementById("kilometerPerHour");
let mph = document.getElementById("MilePerHour");

//getting the volume page input values
let milimeterCubed = document.getElementById("milimeterCubed");
let centimeterCubed = document.getElementById("centimeterCubed");
let meterCubed = document.getElementById("meterCubed");
let mililiter = document.getElementById("mililiter")
let liter = document.getElementById("liter");

//getting the distance page input values
let millimeter = document.getElementById("millimeter");
let centimeter = document.getElementById("centimeter");
let meter = document.getElementById("meter");
let kilometer = document.getElementById("kilometer");
let inch = document.getElementById("inch");
let feet = document.getElementById("feet");
let yard = document.getElementById("yard");
let mile = document.getElementById("mile");

//getting the time page input values
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let day = document.getElementById("day");
let week = document.getElementById("week");
let month = document.getElementById("month");
let year = document.getElementById("year");

//getting the temperature page input values
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

//getting all of the inputs from the html and storing them under changeInputs
let numInputs = document.getElementsByClassName("input")

//looping through all the inputs fields
for(i=0;i<numInputs.length;i++) {
//checking if the user has entered a number into any of the input fields
//if the user enters a number into of the input fields the conversions function will be called
numInputs[i].addEventListener("input", conversions);
}

//conversions functions 
//function identifies the entered input field id and value and changes the other input fields correspondingly
/*Section was referenced from several youtube videos
https://www.youtube.com/watch?v=4GCC5DBh_Pk
https://www.youtube.com/watch?v=MBSgmji130s
https://www.youtube.com/watch?v=LWoGu5tSeig
*/
function conversions() {
    console.log("conversions");
    //getting the id of the input field that the user has entered input into and storing it as inputId
    let inputId = event.target.id;
    //getting the value of the input field that the user has entered input into and storing it as inputValue
    let inputValue = parseFloat(event.target.value);

    //switch statements that have cases based on the id value of the input field
    //if a case is chosen the proper values will be calculated and their input fields will be updated accordingly 
    switch(inputId) {
        /*mass page cases*/
        //case if the id of the input field that the user has entered into is "grams"
        case "grams":
            console.log("grams");
            kilograms.value = (inputValue/1000);
            tons.value = (inputValue*1.1023e-6);
            pounds.value = (inputValue*0.002204623);
            ounces.value = (inputValue*0.03527396);
            break;
        //case if the id of the input field that the user has entered into is "kilograms"
        case "kilograms":
            console.log("kilograms");
            grams.value = (inputValue*1000);
            tons.value = (inputValue*0.001102);
            pounds.value = (inputValue*2.204623);
            ounces.value = (inputValue*35.27396);
            break;
        //case if the id of the input field that the user has entered into is "tons"
        case "tons":
            console.log("tons");
            grams.value = (inputValue*1000); 
            kilograms.value = (inputValue*100);
            pounds.value = (inputValue*2204.6226);
            ounces.value = (inputValue*35273.962);
            console.log(inputValue);
            break;  
        //case if the id of the input field that the user has entered into is "pounds"
        case "pounds":
            console.log("pounds");
            grams.value = (inputValue*453.59237);
            kilograms.value = (inputValue*0.45359237);
            tons.value = (inputValue*0.00045359237);
            ounces.value = (inputValue*16);
            break;
        //case if the id of the input field that the user has entered into is "ounces"
        case "ounces":
            console.log("ounces");
            grams.value = (inputValue*28.349523);
            kilograms.value = (inputValue*0.028349523);
            tons.value = (inputValue*2.8349523e-5);
            pounds.value = (inputValue*0.0625);
            break;
        
        /*speed page cases*/
        //case if the id of the input field that the user has entered into is "meterPerSecond"
        case "meterPerSecond":
            console.log("mps");
            kph.value = (inputValue*3.6);
            mph.value = (inputValue*2.236936);
            break;
        //case if the id of the input field that the user has entered into is "kilometerPerHour"
        case "kilometerPerHour":
            console.log("kph");
            mps.value = (inputValue*0.2777778);
            mph.value = (inputValue*0.6213712);
            break;
        //case if the id of the input field that the user has entered into is "MilePerHour"
        case "MilePerHour":
            console.log("mph");
            mps.value = (inputValue*0.44704);
            kph.value = (inputValue*1.609344);
            break;

        /*volume page cases*/
        //case if the id of the input field that the user has entered into is "milimeterCubed"
        case "milimeterCubed":
            console.log("mili cubed");
            centimeterCubed.value = (inputValue*0.001);
            meterCubed.value = (inputValue*0.000000001);
            mililiter.value = (inputValue*0.001);
            liter.value = (inputValue*0.000001);
            break;
        //case if the id of the input field that the user has entered into is "centimeterCubed"
        case "centimeterCubed":
            console.log("centi cubed");
            milimeterCubed.value = (inputValue*1000);
            meterCubed.value = (inputValue*1e-6);
            mililiter.value = (inputValue*1);
            liter.value = (inputValue*0.001);
            break;
        //case if the id of the input field that the user has entered into is "meterCubed"
        case "meterCubed":
            console.log("meter cubed");
            milimeterCubed.value = (inputValue*1e+9);
            centimeterCubed.value = (inputValue*1000000);
            mililiter.value = (inputValue*1000000);
            liter.value = (inputValue*1000);
            break;
        //case if the id of the input field that the user has entered into is "mililiter"
        case "mililiter":
            console.log("mililiter");
            milimeterCubed.value = (inputValue*1000);
            centimeterCubed.value = (inputValue*1);
            meterCubed.value = (inputValue*1e-6);
            liter.value = (inputValue*0.001);
            break;
        //case if the id of the input field that the user has entered into is "liter"
        case "liter":
            console.log("liter");
            milimeterCubed.value = (inputValue*1000000);
            centimeterCubed.value = (inputValue*1000);
            meterCubed.value = (inputValue*0.001);
            mililiter.value = (inputValue*1000);
            break;

        /*distance page cases*/
        //case if the id of the input field that the user has entered into is "milimeter"
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
        //case if the id of the input field that the user has entered into is "centimeter"
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
        //case if the id of the input field that the user has entered into is "meter"
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
        //case if the id of the input field that the user has entered into is "kilometer"
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
        //case if the id of the input field that the user has entered into is "inch
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
        //case if the id of the input field that the user has entered into is "feet"
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
        //case if the id of the input field that the user has entered into is yard"
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
        //case if the id of the input field that the user has entered into is "mile"
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
        
        /*time page cases*/
        //case if the id of the input field that the user has entered into is "second"
        case "second":
            minute.value= inputValue/60;
            hour.value= inputValue/3600;
            day.value=inputValue/86400;
            week.value=inputValue/604800;
            month.value=inputValue/2629800;
            year.value=inputValue/31557600;
            break;
        //case if the id of the input field that the user has entered into is "minute"
        case "minute":
            second.value=inputValue*60;
            hour.value=inputValue/60;
            day.value=inputValue/1440;
            week.value=inputValue/10080;
            month.value=inputValue/43830;
            year.value=inputValue/525960;
            break;
        //case if the id of the input field that the user has entered into is "hour"
        case "hour":
            second.value=inputValue*3600;
            minute.value=inputValue*60;
            day.value=inputValue/24
            week.value=inputValue/168;
            month.value=inputValue/730.5;
            year.value=inputValue/8766;
            break;
        //case if the id of the input field that the user has entered into is "day"
        case "day":
            second.value=inputValue*604800;
            minute.value=inputValue*10080;
            hour.value=inputValue*168;
            week.value=inputValue/7;
            month.value=inputValue/30.4375;
            year.value=inputValue/365.25;
            break;
        //case if the id of the input field that the user has entered into is "week"
        case "week":
            second.value=inputValue*604800;
            minute.value=inputValue*10080;
            hour.value=inputValue*168;
            day.value=inputValue*7;
            month.value=inputValue/4.34524;
            year.value=inputValue/52.17857;
            break;
        //case if the id of the input field that the user has entered into is "month"
        case "month":
            second.value=inputValue*2629800;
            minute.value=inputValue*43830;
            hour.value=inputValue*730.5;
            day.value=inputValue*30.4375;
            week.value=inputValue*4.348214;
            year.value=inputValue/12;
            break;
        //case if the id of the input field that the user has entered into is "year"
        case "year":
            second.value=inputValue*31557600;
            minute.value=inputValue*525960;
            hour.value=inputValue*8766;
            day.value=inputValue*365.25;
            week.value=inputValue*52.17857;
            month.value=inputValue*12;
            break;

        /*temperature page cases*/
        case "celsius":
            console.log("celsius");
            fahrenheit.value = ((inputValue)*(9/5)+32);
            break;
        case "fahrenheit":
            console.log("fahrenheit");
            celsius.value = ((inputValue)*(5/9)-32);
            break;
    }  
    //calling function that will change the number of decimal places displayed in the input fields
    inputDecimalChange(inputId);
}

//function that will change the number of decimal points displayed in the input fields
//function takes in the id of the input field that the user has entered a number into
function inputDecimalChange(currentInputId) {
    //getting all of the inputs from the html and storing them under changeInputDecimal
    var changeInputDecimal = document.getElementsByClassName("input");
    //looping through the input fields
    for(i=0;i<changeInputDecimal.length;i++){
        //checking if the id of the current input fields equal the id of the input field that the user has entered a number into
        if(changeInputDecimal[i].id != currentInputId) {
            //changing the number of decimal places of the input field
            //format was referenced from stackoverflow. https://stackoverflow.com/questions/14862009/make-an-html-number-input-always-display-2-decimal-places
            changeInputDecimal[i].value = parseFloat(changeInputDecimal[i].value).toFixed(decimalNum);
        }
    }
}

//light mode dark mode was referenced from youtube https://www.youtube.com/watch?v=-Jt_h91uXkQ
//getting the last selected theme from local storage
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
//checking if the last selected theme was dark mode
if(getTheme == "dark") {
    //toggling a dark-mode class
    document.body.classList.toggle("dark-mode");
    //calling function that will style for dark mode
    modeSwitch("dark-mode");
}

}

//function that is called when reset button is clicked
//function will get all inputs fields and clear/reset them
function resetInputFields() {
    var inputsToClear = document.getElementsByClassName("input");
    //looping through all of the input fields
    for (i=0; i<inputsToClear.length; i++) {
        //clearing the input field
        inputsToClear[i].value = "";
    }
}

//light mode dark mode implementation was referenced from youtube https://www.youtube.com/watch?v=-Jt_h91uXkQ
//toggleMode function will run when dark mode/light mode button in the nav is clicked
//function toggles between dark and light mode and saves current theme to local storage
function toggleMode() {
    //toggling a dark-mode class to help differentiate the current mode
    document.body.classList.toggle("dark-mode");

    let theme;
    //checking if the dark-mode class is in effect. If yes, theme will be set to dark-mode 
    //styling function will be called
    if(document.body.classList.contains("dark-mode")){
        theme = "dark";
        modeSwitch("dark-mode")
    }
    //if the dark-mode class is not in effect. theme will be set to light-mode
    //styling function will be called
    else{
        modeSwitch("light-mode") 
        theme = "light";
    }

    //saving current theme to local storage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

//function that takes in the current theme
//if theme is "dark-mode", the dark mode styling will occur
//if theme is "light-mode", the light mode styling will occur
function modeSwitch(currentTheme) {

    if (currentTheme=="dark-mode") {
        //making the light mode/dark mode button stay checked in dark mode
        document.getElementById("modeSwitch").checked = true;
        //switching colours to darkmode
        document.querySelector(":root").style.setProperty("--navBar","#222831");
        document.querySelector(":root").style.setProperty("--white","#393E46");
        document.querySelector(":root").style.setProperty("--offwhite","#222831");
        document.querySelector(":root").style.setProperty("--offblack","#F2F2F2");
        document.querySelector(":root").style.setProperty("--red","#F2F2F2");
        document.querySelector(":root").style.setProperty("--iconHover","#5C6572");
        //switching icons to darkmode
        document.getElementById("massIcon").src = "icons/mass-white.png";
        document.getElementById("tempIcon").src = "icons/thermometer-white.png";
        document.getElementById("speedIcon").src = "icons/speed-white.png";
        document.getElementById("lengthIcon").src = "icons/length-white.png";
        document.getElementById("timeIcon").src = "icons/time-white.png";
        document.getElementById("volumeIcon").src = "icons/volume-white.png";
        document.getElementById("githubLogo").src = "images/gitHubLogo-darkMode.png";
    }
    else {
        //making the light mode/dark mode button stay checked in light mode
        document.getElementById("modeSwitch").checked = false;
        //switching colours to lightmode
        document.querySelector(":root").style.setProperty("--navBar","#FC4F1B");
        document.querySelector(":root").style.setProperty("--white","white");
        document.querySelector(":root").style.setProperty("--offwhite","#F2F2F2");
        document.querySelector(":root").style.setProperty("--offblack","#222831");
        document.querySelector(":root").style.setProperty("--red","#CB3B24");
        document.querySelector(":root").style.setProperty("--iconHover","#E7E7E7");
        //switching icons to lightmode
        document.getElementById("massIcon").src = "icons/mass-red.png";
        document.getElementById("tempIcon").src = "icons/thermometer-red.png";
        document.getElementById("speedIcon").src = "icons/speed-red.png";
        document.getElementById("lengthIcon").src = "icons/length-red.png";
        document.getElementById("timeIcon").src = "icons/time-red.png";
        document.getElementById("volumeIcon").src = "icons/volume-red.png";
        document.getElementById("githubLogo").src = "images/gitHubLogo-lightMode.png";
    }
}


