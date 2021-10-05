import { answers } from './answers.js';

const button = document.getElementById('ask');
const answer = document.getElementById('answer');
//const question = document.getElementById('question');
const ballShake = document.getElementById('ball-shake');
const reset = document.getElementById('reset');

const getRandomNumber = () => {
    return Math.floor(Math.random() * answers.length);
};

button.addEventListener('click', () => {
    ballShake.play();
    button.disabled = true;
    const randomIdx = getRandomNumber();
    answer.textContent = answers[randomIdx];
    document.getElementById('ans-box').classList.remove('shake');
    setInterval(()=> {
        document.getElementById('ans-box').classList.add('shake');
    }, 1);
    setInterval(()=> {
        document.getElementById('answer').classList.remove('hidden');
    }, 1500);
});

reset.addEventListener('click', () => {
    document.getElementById('answer').classList.add('hidden');
    answer.textContent = null;
    button.disabled = false;
});

// if (question.textContent === '') {
//     answer.textContent = 'Please ask a question';
// } else {
//     answer.textContent = answers[randomIdx];
// }