let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber =  Math.round(Math.random() *(3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')


//get a random computer choice
function generatedComputerChoice() {
	if (randomNumber === 1){
		return computerChosen = 'rock'
	}else if (randomNumber === 2){
		return computerChosen = 'paper'
	}else if (randomNumber === 3) {
		return computerChosen = 'scissors'
	}
}

//get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChosen = e.target.id
	generatedComputerChoice()
	results()
	userChoice.innerHTML = userChosen
	computerChoice.innerHTML = computerChosen
	displayResult.innerHTML = result
}))

//get the results
function results(){
	if(computerChosen === userChosen){
		return result = 'There was a Tie'
	}else if (computerChosen === 'rock' && userChosen === 'paper'){
		return result = 'You Lose! Rock beats Paper'
	}else if (computerChosen === 'rock' && userChosen === 'scissors'){
		return result = 'You Win !!!'
	}else if (computerChosen === 'paper' && userChosen === 'rock'){
		return result = 'You Lose! Paper beats Rock'
	}else if (computerChosen === 'paper' && userChosen === 'scissors'){
		return result = 'You Win !!!'
	}else if (computerChosen === 'scissors' && userChosen === 'rock') {
		return result = 'You Win !!!'
	}else if (computerChosen === 'scissors' && userChosen === 'paper'){
		return result = 'You Lose! Scissors beats Paper'
	}
}