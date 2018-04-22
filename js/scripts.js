let sliders = document.querySelectorAll(".slider");
let navleft = document.querySelector("#left");
let navright = document.querySelector("#right");
let currslideindex = 0;

//clear all images when changing slides
function clearallimgs() {
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
}

function initslider() {
    clearallimgs();
    sliders[0].style.display = "block";
}


/*Run functions*/
initslider();