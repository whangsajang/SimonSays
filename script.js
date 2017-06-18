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
    for (var i = 0; i < computer.length; i++){
        playSequence(i)
    }
}

function playSequence(i) {
    setTimeout(function(){
        playAudio(computer[i]);
        lightUp(computer[i]);
    }, 1500 * i);


}

function playAudio(i){
    switch (i){
        case 'red':
            audio1.play();
            break;
        case 'blue':
            audio2.play();
            break;
        case 'yellow':
            audio3.play();
            break;
        case 'green':
            audio4.play();
    }
}

function lightUp(color){
    var tile = $('[data-color=' + color + ']').addClass('litup');
    setTimeout(function(){
        tile.removeClass('litup');
    }, 400)
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
        playAudio(pick);

    })
})