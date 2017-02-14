
var check = window.prompt('Do you want to play?')
check = check.trim().toLowerCase()
if (check === 'yes') {
  var confimation = window.confirm('Are you sure:')
  if (confimation === true) {
    rockPaperScissors()
  } else {
    window.alert('Well, alright then')
  }
} else {
  window.alert('nope')
}
function rockPaperScissors () {
  var numRounds = window.prompt('rounds:')
  numRounds = parseInt(numRounds)

  while (numRounds > 0) {
    var computerChoice = Math.random()
    var userChoice = window.prompt('type rock, paper, scissors')
    userChoice = userChoice.trim().toLowerCase()

    if (userChoice === 'rock' && computerChoice > 0.1 && computerChoice < 0.3) {
      window.alert('Computer chose rock, you chose rock, you tied')
      numRounds -= 1
    } else if (userChoice === 'rock' && computerChoice > 0.3 && computerChoice < 0.5) {
      window.alert('You chose rock and computer chose paper, you lost')
      numRounds -= 1
    } else if (userChoice === 'rock' && computerChoice > 0.5 && computerChoice < 0.7) {
      window.alert('You chose rock and computer chose scissors, you win!')
      numRounds -= 1
    } else if (userChoice === 'paper' && computerChoice > 0.1 && computerChoice < 0.3) {
      window.alert('Computer chose rock, you chose paper, you win')
      numRounds -= 1
    } else if (userChoice === 'paper' && computerChoice > 0.3 && computerChoice < 0.5) {
      window.alert('Computer chose paper, you chose paper, you tied')
      numRounds -= 1
    } else if (userChoice === 'paper' && computerChoice > 0.5 && computerChoice < 0.7) {
      window.alert('Computer chose scissors, you chose paper, you lose')
      numRounds -= 1
    } else if (userChoice === 'scissors' && computerChoice > 0.1 && computerChoice < 0.3) {
      window.alert('You chose scissors, computer chose rock, you lose')
      numRounds -= 1
    } else if (userChoice === 'scissors' && computerChoice > 0.3 && computerChoice < 0.5) {
      window.alert('You chcose scissors, computer chose paper, you win!')
      numRounds -= 1
    } else if (userChoice === 'scissors' && computerChoice > 0.5 && computerChoice < 0.7) {
      window.alert('You chose scissors, computer chose scissors, its a tie!')
    } else if (userChoice === null || userChoice === undefined) {
      window.alert('Please enter a value')
    } else {
      window.prompt('bad round, this round will not count')
    }
  }
}
