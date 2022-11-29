// document.querySelectorAll("button")[5].addEventListener("click", Clicked);
// event listener is the method that gives two argument first is string and other is only function name no () allowed

//this for the when user press button on screen
for(var i =0; i<document.querySelectorAll(".drum").length; i++){
    // for the class use . 
    //only function name not paranthesis 
    document.querySelectorAll(".drum")[i].addEventListener("click", function Clicked(){
        // what you cliked that tells you this identity
        var bInnerHTML = this.innerHTML;
        whichSoud(bInnerHTML);
        buttonAnimation(bInnerHTML);
    });
}
// function Clicked(){
//     // what you cliked that tells you this identity
//     var bInnerHTML = this.innerHTML;
//     whichSoud(bInnerHTML);
// }

//this keyboard key press
document.addEventListener("keypress", function(event){
    var keyboardKey = event.key;
    whichSoud(keyboardKey);
    buttonAnimation(keyboardKey);
});

// this is function for which soud will be played
function whichSoud(key){

    switch (key) {
        // for every case we are adding our sound to the particular button has been clicked
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        
        default:
            console.log(bInnerHTML);
        break;
    }
}
function buttonAnimation(cureentKey){

    var activeButton = document.querySelector("." + cureentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}



