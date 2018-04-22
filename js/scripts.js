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

//show new image
function navimage() {
    clearallimgs();
    sliders[currslideindex].style.display = "block";
}

navleft.addEventListener("click", function() {
    if(currslideindex == 0) {
        currslideindex = sliders.length - 1;
    }
    else {
        currslideindex--;
    }
    navimage();
});

navright.addEventListener("click", function() {
    if(currslideindex == sliders.length - 1) {
        currslideindex = 0;
    }
    else {
        currslideindex++;
    }
    navimage();
});


/*Run functions*/
initslider();