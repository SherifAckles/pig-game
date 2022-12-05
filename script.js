'use strict';
//starting position
//A-set scores to 0 for player 1 and 2
//b- hide the dice pic

//selectiong elements
const diceEl = document.querySelector('.dice');
// assign a var to the dice roll btn
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
let finalScores, currentScore, activePlayer, playing;

const init = function () {
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  //remove the winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //remove the active player class
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //unlock the game to play again
  //playing =  false?playing = true : playing = false
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//user rolls dice
//A- creat a random number from 1 to 6

//b- function to click the dice roll btn
rollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = ` dice-${dice}.png`;
    //if the dice is not 1
    if (dice !== 1) {
      //add the dice score to the current score
      //currentScore = currentScore + dice
      currentScore = currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if the dice score is 1 switch to the other player
      //resitting current score for player 2 to 0
      //switch player
      switchPlayer();
    }
  }
});
//user hold score
//A-assign a var btn
//b-assign a click function to the hold btn

holdBtn.addEventListener('click', function () {
  if (playing) {
    //add the score to the active player
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    //check player's score >= 100

    if (finalScores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      //assign winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document;

      //remove the active player class
    }

    //switch player
    switchPlayer();
  }
});
//assigning new game functionality

newGame.addEventListener('click', init);
