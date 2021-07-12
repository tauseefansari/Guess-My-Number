'use strict';
const scores = document.querySelector('.score');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const secret = document.querySelector('.number');

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randomNumber();

let score = 20;
let high = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // If no input
  if (!guess) {
    message.textContent = '⛔ Not a number';
  }

  // if guess is equal to secret
  else if (guess === secretNumber && score > 0) {
    secret.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    secret.style.width = '30rem';
    message.textContent = '🎉 Correct Number';
    scores.textContent = score;
    high = Math.max(score, high);
    highScore.textContent = high;
  }

  // If guess is different than secret number
  else if (guess !== secretNumber) {
    message.textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
    score--;
    scores.textContent = score > 1 ? score : 0;
    if (score <= 0) message.textContent = '🚫 You lost the game!';
  }

  // If guess is too high
  // else if (guess > secretNumber) {
  //   message.textContent = '📈 Too high!';
  //   score--;
  //   scores.textContent = score > 1 ? score : 0;
  //   if (score <= 0) message.textContent = '🚫 You lost the game!';
  // }

  // If guess is too low
  // else if (guess < secretNumber) {
  //   message.textContent = '📈 Too low!';
  //   score--;
  //   scores.textContent = score > 1 ? score : 0;
  //   if (score <= 0) message.textContent = '🚫 You lost the game!';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  document.querySelector('.guess').value = '';
  scores.textContent = score;
  message.textContent = 'Start guessing...';
  secret.textContent = '?';
  document.body.style.backgroundColor = '#222';
  secret.style.width = '15rem';
});
