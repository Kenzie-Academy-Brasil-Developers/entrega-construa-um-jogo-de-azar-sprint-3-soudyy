const jokenpo = ["pedra", "papel", "tesoura"]
const jo = document.getElementById('jo')
const ken = document.getElementById('ken')
const po = document.getElementById('po')
const loginScreen = document.getElementById('illustration')
const jokenChoice = document.getElementById('theGame')
const battleScreen = document.getElementById('battle')
const result = document.getElementById('result')
const playerCard = document.getElementById('curretPlayer')
const oponentCard = document.getElementById('curretOponent')
const corpo = document.querySelector("body")
const botaoJogar = document.getElementById('start')

let receiver = 0

botaoJogar.addEventListener('click', jogar)


function jogar() {
    loginScreen.style.animationName = "separeStart";
    setTimeout(function() {
        loginScreen.style.display = "none"
        jokenChoice.style.display = "flex"
    }, 1000)
}


const buttonChoice = function(event) {

    const playerChoice = event.target

    console.log(playerChoice.id)

    const bot = Math.floor(Math.random() * jokenpo.length)

    console.log(bot)
    if (playerChoice.id == "jo" && bot == 0 || playerChoice.id == "ken" && bot == 1 || playerChoice.id == "po" && bot == 2) {
        // result.innerText = "bot escolheu: " + jokenpo[bot] +
        //     ", Empate"
        // result.style.display = "flex"
    } else if (playerChoice.id == "jo" && bot == 2 || playerChoice.id == "ken" && bot == 0 || playerChoice.id == "po" && bot == 1) {
        // result.innerText = "bot escolheu: " + jokenpo[bot] +
        //     ", você Ganhou"
        // result.style.display = "flex"
    } else {
        // result.innerText = "bot escolheu: " + jokenpo[bot] +
        //     ", você perdeu"
        // result.style.display = "flex"
    }
    corpo.style.animationName = "backgroundChangeColor";
    //corpo.style.animationName = "fall";

    if (playerChoice.id == "jo") {
        playerCard.style.backgroundImage = "url('../img/pedra.png')";
        playerChoice.style.animationName = "fallUp";
        ken.style.animationName = "fallDown"
        po.style.animationName = "fallDown"
    } else if (playerChoice.id == "ken") {
        playerChoice.style.animationName = "fallUp";
        playerCard.style.backgroundImage = "url('../img/papel.png')";
        jo.style.animationName = "fallDown"
        po.style.animationName = "fallDown"
    } else if (playerChoice.id == "po") {
        playerChoice.style.animationName = "fallUp";
        playerCard.style.backgroundImage = "url('../img/tesoura.png')";
        ken.style.animationName = "fallDown"
        jo.style.animationName = "fallDown"
    }
    if (bot == 0) {
        oponentCard.style.backgroundImage = "url('../img/pedra.png')";
    } else if (bot == 1) {
        oponentCard.style.backgroundImage = "url('../img/papel.png')";
    } else if (bot == 2) {
        oponentCard.style.backgroundImage = "url('../img/tesoura.png')";
    }
    //playerCard.style.backgroundImage = "norepeat"
    setTimeout(function() {
            jokenChoice.style.display = "none";
            battleScreen.style.display = "flex";
        }, 2000)
        //battleResult()
}

const cells = document.querySelectorAll('button');
for (let i = 2; i < cells.length; i++) {
    cells[i].addEventListener("click", buttonChoice)
}


function startingGame() {

    jokenChoice.style.display = "none"
    result.style.display = "none"
}
startingGame()

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
unloadScrollBars();