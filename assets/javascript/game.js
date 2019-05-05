$(document).ready(function () {

    resetGame();

    $(".crystals").on("click", function () {

        if (playerScore === 0) {
            $("#status").fadeOut();
        }

        addScore($(this).attr("id"));

        if (playerScore === randomScore) {
            wins++;
            $("#status").html("You Win!");
            $("#status").fadeIn();
            resetGame();
        }
        else if (playerScore > randomScore) {
            losses++;
            $("#status").html("You Lose!");
            $("#status").fadeIn();
            resetGame();
        }
    });
})

var playerScore;
var randomScore;
var wins = 0;
var losses = 0;

var redGem = new Gem();
var blueGem = new Gem();
var greenGem = new Gem();
var amberGem = new Gem();


function Gem(value) {
    this.value = value;
}

function addScore(gem) {
    switch (gem) {
        case "red":
            playerScore += redGem.value;
            break;
        case "blue":
            playerScore += blueGem.value;
            break;
        case "green":
            playerScore += greenGem.value;
            break;
        case "amber":
            playerScore += amberGem.value;
            break;
    }
    $("#playerScore").html(playerScore);
}

function resetGame() {
    var powersArr = [];
    playerScore = 0;
    randomScore = Math.floor(Math.random() * 102) + 19;

    redGem.value = getRandomPower(powersArr);
    blueGem.value = getRandomPower(powersArr);
    greenGem.value = getRandomPower(powersArr);
    amberGem.value = getRandomPower(powersArr);



    console.log("Red:" + redGem.value);
    console.log("Blue:" + blueGem.value);
    console.log("Green:" + greenGem.value);
    console.log("Amber:" + amberGem.value);


    $("#playerScore").html(playerScore);
    $("#randomScore").html(randomScore);
    $("#wins").html(wins);
    $("#losses").html(losses);

}

function getRandomPower(pa) {
    var power;

    do {
        power = Math.floor(Math.random() * 12) + 1;
    } while (pa.includes(power));

    pa.push(power);

    return power;

}
