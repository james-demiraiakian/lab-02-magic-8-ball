import { answers } from './answers.js';

const button = document.getElementById('ask');
const answer = document.getElementById('answer');


button.addEventListener('click', () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[randomIdx];
});