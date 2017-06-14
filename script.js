var computer = [];
var player = [];
var notPlayable = false;
var clickCount = 0;
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var colors = ['red', 'blue', 'yellow', 'green'];
var gameStarted = true;


function addToSequence(){
    var random = Math.floor(Math.random() * 4) ;
    computer.push(colors[random]);
    console.log(computer);
}

function playSequence() {
    setTimeout(function(){
        for(var x = 0; x >= computer.length; x++){
            playAudio(x)
        }
    })

}

function playAudio(x){

}

function lightUp(){

}
function gameStart(){
    addToSequence();
    playSequence();
    compareSequence();
}

function compareSequence(){
    for(var x = 0; x < player.length; x++){
        if(player[x] !== computer[x]){
            console.log('You\'ve lost');
            return;
        }
    }

}

$(document).ready(function(){
    $('.start').on('click', function(){
        gameStarted = true;
        gameStart();
    })
    $('.game').on('click', function(){
        var pick = $(this).data('color');
        player.push(pick);

    })
})