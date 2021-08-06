import myGame from './Game.js';

const scoreList = document.querySelector('.score-list');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');

const renderList = () => {
  scoreList.innerHTML = '';
  myGame.getScores()
    .then((scores) => {
      scores.result.forEach((score, index) => {
        scoreList.innerHTML += `
          <li class="score-item${index % 2 === 0 ? ' item-shade' : ''}">
            ${score.user}: ${score.score}
          </li>
        `;
      });
    });
};
