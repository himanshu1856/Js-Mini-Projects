const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 100);
}

const checkTheGuess = (num) => {
    if(num > randomNumber){
        return "Too High!";
    } else if(num < randomNumber){
        return "Too Low!";
    } else {
        isGameOn = false;
        startGame.removeAttribute('disabled');
        return "You got it! ✅";
    }
}

const handleInput = () => {
    const num = parseInt(input.value);
    attempts.push(num);
    const ans = checkTheGuess(num);
    document.querySelector('.answer').innerText = ans;
    document.querySelector('.attempts').innerText = `Your guesses: ${attempts.map(guess => guess)}`;
}

const handleEntry = (e) => {
    e.key === 'Enter' ? handleInput() : "";
}

const handleStartGame = e =>{
    attempts = [];
    document.querySelector('.answer').innerText = ''
    document.querySelector('.attempts').innerText = ''
    randomNumber = generateRandomNumber();
    input.value = '';
}

let randomNumber = generateRandomNumber();
const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const startGame = document.querySelector('.start-game');
let attempts = [];
let isGameOn = true;

input.addEventListener('keydown', handleEntry);
submitBtn.addEventListener('click', handleInput);
startGame.addEventListener('click', handleStartGame);







