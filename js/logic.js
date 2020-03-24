let slideIndex = 0;
showSlides(slideIndex);

// Mouse click event handlers
//
// We must wait for the DOM to load (Document Object Model) so all the JavaScript and HTML, CSS etc... has fully loaded
// Otherwise it might not be able to find the links
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("prevLink").addEventListener("click", function() {plusSlides(-1);});
    document.getElementById("nextLink").addEventListener("click", function() {plusSlides(1);});
});

function plusSlides(n) {
    let slidePosition = slideIndex += n;

    // We need to check either end of the images so we can
    // wrap the slideshow around
    if (slidePosition == -1) {
        slidePosition = 6; //last slide
    }
    else if (slidePosition == 7) {
        slidePosition = 0; //first slide
    }

    slideIndex = slidePosition;

    showSlides(slidePosition);
}

document.onkeydown = function(e){
    switch(e.code) {
        case "ArrowLeft":
            // Left Arrow
            //alert("Left Arrow Key Pressed. keyCode = " + e.keyCode);
            plusSlides(-1);
            break; // JM - Without this break statement it can fall through and into the next case statement, ouch!
        case "ArrowRight":
            // Right Arrow
            //alert("Right Arrow Key Pressed. keyCode = " + e.keyCode);
            plusSlides(1);
            break; // JM - Without this break statement it can fall through and into the next case statement, ouch!
    }
};

function showSlides(n) {

    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < (slides.length); i++) {
        if (i === n) {
            // Change the class so the current image is displayed using the .slideshow class
            slides[i].className = slides[i].className.replace("slides", "slides showslide");
        }
        else {
            // If not the active image then change back to non-active if the replace succeeds
            slides[i].className = slides[i].className.replace("slides showslide", "slides");
        }
    }
}
