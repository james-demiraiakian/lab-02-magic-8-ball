import { answers } from './answers.js';

const button = document.getElementById('ask');
const answer = document.getElementById('answer');
//const question = document.getElementById('question');
const ballShake = document.getElementById('ball-shake');

button.addEventListener('click', () => {
    ballShake.play();
    const randomIdx = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[randomIdx];
    document.getElementById('ans-box').classList.remove('shake');
    setInterval(()=> {
        document.getElementById('ans-box').classList.add('shake');
    }, 1);
});


// if (question.textContent === '') {
//     answer.textContent = 'Please ask a question';
// } else {
//     answer.textContent = answers[randomIdx];
// }