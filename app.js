const button = document.getElementById("button");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const redImage = document.getElementById("red-Image");
const blueImage = document.getElementById("blue-Image");
const yellowImage = document.getElementById("yellow-Image");
button.oninput=()=>{
    if(red,checked){
        redImage.classList.remove("hidden");
        redImage.classList.add("eject");
    }

    if(blue,checked){
        blueImage.classList.remove("hidden");
        blueImage.classList.add("eject");
    }

    if(yellow,checked){
        yellowImage.classList.remove("hidden");
        yellowImage.classList.add("eject");
    }
}