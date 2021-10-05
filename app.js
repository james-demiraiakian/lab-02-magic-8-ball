// import functions and grab DOM elements
const colors = ['purple', 'green', 'black'];
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

const randomIdx = Math.floor(Math.random() * colors.length);
console.log(colors[randomIdx]);
console.log(randomIdx);