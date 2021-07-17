var drumslength = document.querySelectorAll("button.drum").length;
var drums = document.querySelectorAll("button.drum");

// Detecting button pressings

for (var i = 0; i < drumslength; i++) {
    drums[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        
        makesound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}

//  Detecting key pressed

document.addEventListener("keydown", function (event) {

    var c = event.key;

    makesound(c);

    buttonAnimation(c);
    
});

function makesound(key) {


    switch (key) {

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            alert("No sound for available for this key !");
            break;

    }

}

function buttonAnimation (currentKey) {

    var activeBtn = document.querySelector("." + currentKey);

    activeBtn.classList.add("pressed");

    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 300);
}