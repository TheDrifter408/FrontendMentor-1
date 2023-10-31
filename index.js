// Grab the button element
let btnElement = document.querySelector('button')

//Grabbing the 'Dark Mode' p element
let darkModeText = document.querySelector(".dark-white-text");
function DarkMode(){
    let body = document.body;
    body.classList.toggle("light-mode");
    if(darkModeText.textContent === "Dark Mode"){
        darkModeText.textContent = "Light Mode";
        btnElement.classList.add("slide-in");
    }
    else {
        btnElement.classList.remove("slide-in");
        btnElement.classList.add("slide-out");
        darkModeText.textContent = "Dark Mode";
    }
}