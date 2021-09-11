const jokenpo = ["pedra", "papel", "tesoura"];
const jo = document.getElementById('jo');
const ken = document.getElementById('ken');
const po = document.getElementById('po');

const loginScreen = document.getElementById('illustration');
const choiceScreen = document.getElementById('theGame');
const battleScreen = document.getElementById('battle');
const result = document.getElementById('result');

const playerCard = document.getElementById('curretPlayer');
const oponentCard = document.getElementById('curretOponent');

const corpo = document.querySelector("body");
const playButton = document.getElementById('start');

const versusTag = document.getElementById('vsTag');
const oponentTag = document.getElementById('oponentTag');
const nameTag = document.getElementById('playerTag');

const prankScreen = document.getElementById('continue');
const audioPrank = document.getElementById('jokenAudio');
let playerResult = ''
let playerPoints = 0;
let oponentPoints = 0;
let sequenceVictory = 0;

playButton.addEventListener('click', verficaInput);


function verficaInput() {
    const player = document.getElementById('input').value;
    playerResult = player
    console.log(playerResult);

    if (player != '') { jogarVsBot(player); }
}


function jogarVsBot(player) {

    BackgroundAudio()
    versusTag.style.display = "none"
    oponentTag.innerText = "Dio:" + oponentPoints;
    nameTag.innerText = player + ":" + playerPoints;
    loginScreen.style.animationName = "separeStart";
    setTimeout(function() {
        loginScreen.style.display = "none";
        choiceScreen.style.display = "flex";
    }, 999);

}

const buttonChoice = function(event) {


    const playerChoice = event.target;

    const bot = Math.floor(Math.random() * jokenpo.length)

    console.log(bot)
    if (playerChoice.id == "jo" && bot == 0 || playerChoice.id == "ken" && bot == 1 || playerChoice.id == "po" && bot == 2) {
        result.innerText = "Dio escolheu: " + jokenpo[bot] +
            ", Empate"

    } else if (playerChoice.id == "jo" && bot == 2 || playerChoice.id == "ken" && bot == 0 || playerChoice.id == "po" && bot == 1) {
        result.innerText = "Dio escolheu: " + jokenpo[bot] +
            ", você Ganhou"
        sequenceVictory = 0;
        playerPoints++;

    } else {
        result.innerText = "Dio escolheu: " + jokenpo[bot] +
            ", você perdeu"
        oponentPoints++;
        sequenceVictory++;
    }
    result.style.display = "block"
    corpo.style.animationName = "backgroundChangeColor";

    if (playerChoice.id == "jo") {
        playerCard.style.backgroundImage = "url('./img/newRock.png')";
        playerChoice.style.animationName = "fallUp";
        ken.style.animationName = "fallDown"
        po.style.animationName = "fallDown"
    } else if (playerChoice.id == "ken") {
        playerChoice.style.animationName = "fallUp";
        playerCard.style.backgroundImage = "url('./img/newPaper.png')";
        jo.style.animationName = "fallDown"
        po.style.animationName = "fallDown"
    } else if (playerChoice.id == "po") {
        playerChoice.style.animationName = "fallUp";
        playerCard.style.backgroundImage = "url('./img/newScissor.png')";
        ken.style.animationName = "fallDown"
        jo.style.animationName = "fallDown"
    }
    if (bot == 0) {
        oponentCard.style.backgroundImage = "url('./img/newRock.png')";
    } else if (bot == 1) {
        oponentCard.style.backgroundImage = "url('./img/newPaper.png')";
    } else if (bot == 2) {
        oponentCard.style.backgroundImage = "url('./img/newScissor.png')";
    }

    if (sequenceVictory == 1) {
        AudioPlayPrank()

    }
    setTimeout(function() {
        jo.style.animationName = "none"
        ken.style.animationName = "none"
        po.style.animationName = "none"
        choiceScreen.style.animationName = "none"
        choiceScreen.style.display = "none";
        battleScreen.style.display = "flex";
        if (sequenceVictory == 1) {

            prankScreen.style.animationName = "Prank";
        }

    }, 1999)
    setTimeout(function() {
        battleScreen.style.animationName = "UpResult"
        choiceScreen.style.animationName = "rotate"


    }, 4999)
    setTimeout(function() {
        choiceScreen.style.display = "flex";
        corpo.style.animationName = "none";
        battleScreen.style.display = "none";
        battleScreen.style.animationName = "none"
        prankScreen.style.animationName = "none";
        nameTag.innerText = playerResult + ":" + playerPoints;
        oponentTag.innerText = "Dio:" + oponentPoints;
    }, 5999)

    //battleResult()
}

const cells = document.querySelectorAll('button');
for (let i = 2; i < cells.length; i++) {
    cells[i].addEventListener("click", buttonChoice)
}


let audioStatus = false;
const playSound = document.getElementById('tocaMusica')
playSound.addEventListener('click', function() {
    const audio = document.getElementById('audioInicio')

    if (audioStatus == false) {
        audio.play();
        audioStatus = true;

    } else {
        audio.pause();
        audioStatus = false;

    }

})

function BackgroundAudio() {
    const audio = document.getElementById('audioInicio')
    audio.play();
}

function AudioPlayPrank() {
    const audioPrank = document.getElementById('jokenAudio')
    const audioBack = document.getElementById('audioInicio')
    audioBack.pause();
    audioPrank.currentTime = 1
    audioPrank.play();
}

function startingGame() {

    choiceScreen.style.display = "none"
    result.style.display = "none"

}
startingGame()


function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
unloadScrollBars();