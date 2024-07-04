//DOM Elements
const colorText = document.getElementById("color");
const main = document.getElementById("main");
const clickMe = document.getElementById("clickMe");

//Color and Names array
const colors = ["#fa0000","#fa6c00","#f6fa00","#018008","#02ede1","#050182","#4a0182", "#ed0cda"];
const colorNames = ["Red", "Orange", "Yellow", "Green", "Light Blue", "Dark Blue", "Purple", "Pink"];

//Variables to manage current color
let oldNum;
let randomNum;

function colorChange()
{
    //Gets a random color that will always be different from the old one
    while(randomNum == oldNum)
    {
        randomNum = Math.floor(Math.random() * (colors.length));
    }

    //Changes DOM elements to match new color
    colorText.style.color = colors[randomNum];
    colorText.innerHTML = colorNames[randomNum];
    main.style.backgroundColor = colors[randomNum];
    
    //Keeps track of previous color
    oldNum = randomNum;
}

//Does initial change into a new color
colorChange();
clickMe.addEventListener("click", colorChange);
