// alert("helo");
function nextSequence(){
    let temp=Math.random();
    temp*=4;
    return Math.floor(temp);
}

let gamePattern=[];
let userClickedPattern=[];
let randomNumber=nextSequence();

let buttonColours=["red","blue","green","yellow"];
let randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

randomChosenColour="#"+randomChosenColour;

$(randomChosenColour).animate(
    {opacity: 0}
);
setTimeout(function(){},20);
$(randomChosenColour).animate(
    {opacity: 1}
);

$(".btn.green").click(function(){
                let userChosenColour="green";               
                userClickedPattern.push(userChosenColour);
              }
);

$(".btn.red").click(function(){
    let userChosenColour="red";               
    userClickedPattern.push(userChosenColour);
  }
);

$(".btn.yellow").click(function(){
    let userChosenColour="yellow";               
    userClickedPattern.push(userChosenColour);
  }
);
$(".btn.blue").click(function(){
    let userChosenColour="blue";               
    userClickedPattern.push(userChosenColour);
  }
);

console.log(userClickedPattern);