
var fired = false;



var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"]

var level = 0;



$(document).keypress(function() {
    if (!fired) {
        $("#level-title").text("Level 0");
        nextSequence();
        fired = true;
    }
    
    
    
})


/*





$(document).on("keypress", function() {
    if (!fired) {
        $("h1").text("Level "+ level);
        randomColour = nextSequence(buttonColours);
    }
    fired = true;
})

function nextSequence(colours) {
    
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = colours[randomNumber];

    level = level + 1;


    $("h1").text("Level "+ level);
    

    

    return randomChosenColour;

    var randomColour = nextSequence(buttonColours);
    
}
*/





/*
$(document).ready(function() {
    $(".btn").click(function(){
        
        
});
*/

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    var userClickedPatternLength = userClickedPattern.length;
    userClickedPatternLength--;
    checkAnswer(userClickedPatternLength);
})



function nextSequence() {
    
    level = level + 1; //change with level++

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    


    $("#level-title").text("Level "+ level);
    

    /*var randomColour = nextSequence(buttonColours);*/

    gamePattern.push(randomChosenColour); 

/*
    var colorId = $("#" + randomChosenColour);

    colorId*/$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);




}

function playSound(nome) {

    var audio = new Audio('./sounds/'+nome+ '.mp3');
    audio.play();
    
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() { 
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        
        if (userClickedPattern.length == gamePattern.length) {

            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
              }, 1000);
               

        }
    } else {
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    fired = false;
    userClickedPattern = [];
}
