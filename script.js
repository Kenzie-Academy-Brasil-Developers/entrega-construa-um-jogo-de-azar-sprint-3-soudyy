const jokenpo = ["pedra", "papel", "tesoura"]
const secao = document.getElementById('illustration')
const jogo = document.getElementById('theGame')
const result = document.getElementById('result')

const botaoJogar = document.getElementById('start')

let receiver = 0

botaoJogar.addEventListener('click', jogar)


function jogar() {
    secao.style.display = "none"
    console.log("pegou")
    jogo.style.display = "flex"
}

const buttonChoice = function(event) {

    const playerChoice = event.target

    console.log(playerChoice.id)

    const bot = Math.floor(Math.random() * jokenpo.length)

    console.log(bot)
    if (playerChoice.id == "jo" && bot == 0 || playerChoice.id == "ken" && bot == 1 || playerChoice.id == "po" && bot == 2) {
        result.innerText = "bot escolheu: " + jokenpo[bot] +
            ", Empate"
        result.style.display = "flex"
    } else if (playerChoice.id == "jo" && bot == 2 || playerChoice.id == "ken" && bot == 0 || playerChoice.id == "po" && bot == 1) {
        result.innerText = "bot escolheu: " + jokenpo[bot] +
            ", você Ganhou"
        result.style.display = "flex"
    } else {
        result.innerText = "bot escolheu: " + jokenpo[bot] +
            ", você perdeu"
        result.style.display = "flex"

    }
    ClearArea()


}

const cells = document.querySelectorAll('button');
for (let i = 1; i < cells.length; i++) {
    cells[i].addEventListener("click", buttonChoice)
}

function ClearArea() {
    var timer = setTimeout(function() {
        result.style.display = "none"

    }, 2000);
}

function startingGame() {
    jogo.style.display = "none"
    result.style.display = "none"
}
startingGame()

// setInterval(function() {
//     console.log('Executa infinitamente, 1 vez por segundo.');
// }, 1000);