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
    answer.classList.add('hidden');
    ballShake.play();
    //button.disabled = true;
    const randomIdx = getRandomNumber();
    answer.textContent = answers[randomIdx];
    document.getElementById('ans-box').classList.remove('shake');
    setTimeout(()=> {
        document.getElementById('ans-box').classList.add('shake');
    }, 1);
    setTimeout(()=> {
        document.getElementById('answer').classList.remove('hidden');
    }, 1600);
});

reset.addEventListener('click', () => {
    answer.classList.add('hidden');
    button.disabled = false;
});