

function toggleMode() {
    console.log("hello");
    var element = document.body;
    element.classList.toggle("dark-mode");
    let theme;
    
    if(element.classList.contains("dark-mode")){
        console.log("dark-mode");
        theme = "dark";
    }
    else{
        console.log("light-mode");
        theme = "light";
    }
    //save to localStorage

    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme == "dark") {
    document.body.classList.toggle("dark-mode");
}