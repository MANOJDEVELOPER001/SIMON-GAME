let array1=[];
let array2=[];
var level = 1;
var random;
// Bind keydown event to body to start the game
$("body").on("keydown", function () {
    $("h1").text("Level " + level);
    call_random();
    play_sound(random);
    play_animation(random);
});


// Bind click event to all buttons once

$("button").on("click", function () {
var button=$(this);
    button.addClass("animated");
    setTimeout(function () {
        button.removeClass("animated");
    }, 50);
    var no_use = this.classList;
    var check = no_use.value;
    var no_use1 = document.querySelectorAll("button")[random].classList;
    var check1 = no_use1.value;
    array2.push(check1);
    array1.push(check);
    console.log(array1);
    console.log(array2);
    if((array1.length)!=(array2.length)){
        array2.pop();
        return;
    }
    else{
    checker(array1, array2);
    }
});


// Function to generate random number
function call_random() {
    random = Math.floor(Math.random() * 4);
}

// Function to play sound based on random number
function play_sound(random) {
    var audio;
    switch (random) {
        case 0:
            audio = new Audio("mixkit-arcade-game-jump-coin-216.mp3");
            break;
        case 1:
            audio = new Audio("mixkit-click-melodic-tone-1129.mp3");
            break;
        case 2:
            audio = new Audio("mixkit-game-click-1114.mp3");
            break;
        case 3:
            audio = new Audio("mixkit-negative-tone-interface-tap-2569 (1).mp3");
            break;
    }
    if (audio) {
        audio.play();
    }
}

// Function to play animation on the button
function play_animation(random) {
    $("button").eq(random).addClass("animated");
    setTimeout(function () {
        $("button").eq(random).removeClass("animated");
    }, 100);
}

// Function to change text in h1 tag
function text_changer(level) {
    $("h1").text("Level " + level);
}

// Function to check correctness of button click
function checker(check, check1) {
    var green=false;
    for(var k=0;k<array1.length;k++){
       if (array1[k] === array2[k] ) {
            green=true;
        }
      else{
            green=false;
            break;
        }
     }
    if(green){
            console.log(array1);
            console.log(array2);
            level += 1;
            text_changer(level);
            call_random();
            array1=[];
            setTimeout(function(){play_sound(random);},100);
            console.log(array1);
            setTimeout(function(){play_animation(random);},100);
        }
    else{
            var audio = new Audio("beep.mp3");
            audio.play();
            $("body").addClass("animation");
        setTimeout(function(){
            $("body").removeClass("animation");
        },100);
        $("h1").text("press any key to restart");
        $("body").on("keydown", function () {
            level=1;
            $("h1").text("Level " + level);
            array1=[];
            array2=[];
       });
       }


}

