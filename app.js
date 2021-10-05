import { answers } from './answers.js';

const button = document.getElementById('ask');
const answer = document.getElementById('answer');
//const question = document.getElementById('question');


button.addEventListener('click', () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[randomIdx];
});


// if (question.textContent === '') {
//     answer.textContent = 'Please ask a question';
// } else {
//     answer.textContent = answers[randomIdx];
// }