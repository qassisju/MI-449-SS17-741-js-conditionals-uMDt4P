
var numRounds = 5



while (numRounds > 0) {
  var computerChoice = Math.random()
  var userChoice = prompt('type 1 for rock, 2 for paper, 3 for scissors')

  if (userChoice === '1' && computerChoice > 0.1 && computerChoice < 0.3 )  {
    window.alert('Computer chose rock, you chose rock, you tied')
    numRounds -=1
  } else if (userChoice === '1' && computerChoice > 0.3 && computerChoice < 0.5 )  {
    window.alert('You chose rock and computer chose paper, you lost')
    numRounds -=1
  }else if (userChoice === '1' && computerChoice > 0.5 && computerChoice < 0.7) {
    window.alert('You chose rock and computer chose scissors, you win!')
    numRounds -=1
  }else if (userChoice === '2' && computerChoice > 0.1 && computerChoice < 0.3 )  {
    window.alert('Computer chose rock, you chose paper, you win')
    numRounds -=1
  }else if (userChoice === '2' && computerChoice > 0.3 && computerChoice < 0.5 )  {
    window.alert('Computer chose paper, you chose paper, you tied')
    numRounds -=1
  }else if (userChoice === '2' && computerChoice > 0.5 && computerChoice <0.7 )  {
    window.alert('Computer chose scissors, you chose paper, you lose')
    numRounds -=1
  } else if (userChoice === '3' && computerChoice > 0.1 && computerChoice < 0.3) {
    window.alert('You chose scissors, computer chose rock, you lose')
    numRounds -=1
  } else if (userChoice === '3' && computerChoice > 0.3 && computerChoice < 0.5) {
    window.alert('You chcose scissors, computer chose paper, you win!')
    numRounds -=1
  } else if (userChoice === '3' && computerChoice > 0.5 && computerChoice < 0.7)  {
    window.alert('You chose scissors, computer chose scissors, its a tie!')
  } else if (userChoice === null || userChoice === undefined) {
    window.alert('Please enter a value')
  }
}























/*var pokemonChoice = window.prompt('Enter 1 to choose Squirtle, 2 for Charmander, 3 for Bulbasaur')




var gamePlay = function () {
  var userChoice = window.prompt('To beat a trainer, you must beat them in one round of rock papper scissors, pick one')
  var computerChoice = Math.random()
}

if (pokemonChoice === '1') {
  var assurance = window.confirm('Are you sure, you cannot change your choice')
  if (assurance === true) {
    window.alert('You chose Squirtle, lets play')
  } else if (assurance === false) {
    window.alert('you were unsure')
  }
} else if (pokemonChoice === null || pokemonChoice === undefined) {
  window.alert('You chose nothing')
}






















if (pokemonChoice === '2') {
  var assurance = window.confirm('Are you sure, you cannot change your choice')
  if (assurance === true) {
    window.alert('You chose charmander')
  } else if (assurance === false) {
    window.alert('you were unsure')
  }
} else if (pokemonChoice === null || pokemonChoice === undefined) {
  window.alert('You chose nothing')
}

if (pokemonChoice === '3') {
  var assurance = window.confirm('Are you sure, you cannot change your choice')
  if (assurance === true) {
    window.alert('You chose Bulbasaur')
  } else if (assurance === false) {
    window.alert('you were unsure')
  }
} else if (pokemonChoice === null || pokemonChoice === undefined) {
  window.alert('You chose nothing')
}
*/
