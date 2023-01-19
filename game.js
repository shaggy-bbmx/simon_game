// alert("helo");


let gamePattern=[];
let userClickedPattern=[];
let buttonColours=["red","blue","green","yellow"];
let level=0;

function play_sound(userChosenColour){
  let chosenSong=new Audio("sounds/"+userChosenColour+ ".mp3");
  chosenSong.play();
}


function nextSequence(){
    ++level;
    $("#level-title").text("Level:"+level); 
    let temp=Math.random();
    temp*=4;
    let randomNumber=Math.floor(temp);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    play_sound(randomChosenColour);
    $("#"+randomChosenColour).animate(
      {opacity: 0}
    );
    setTimeout(function(){},20);
    $("#"+randomChosenColour).animate(
      {opacity: 1}
    );

}


function animatePress(userChosenColour){
    $(".btn."+ userChosenColour).addClass("pressed");
    setTimeout(function(){
      $(".btn."+ userChosenColour).removeClass("pressed");},100);
    
}


$(".btn").click(function(){
        let userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        
        let lastIndex=userClickedPattern.length-1;
        if(userClickedPattern[lastIndex]!=gamePattern[lastIndex]){
             $("#level-title").text("GAME OVER!!!");
             level=0;
             gamePattern=[];
             userClickedPattern=[];

             let chosenSong=new Audio("sounds/wrong.mp3");
             chosenSong.play();

             $("body").addClass("game-over");
             setTimeout(function(){$("body").removeClass("game-over");},200);
             
             return;
        }

        play_sound(userChosenColour);
        animatePress(userChosenColour);
        nextSequence();
});

$(document).keypress(function(){
                if(level==0)nextSequence();});

