const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const screen = document.querySelector(".screen > h1");
const stepController = document.querySelector(".control-jump > input")
const resetBtn = document.querySelector(".reset > button")

let displayValue = 0;
let stepValue = Number(stepController.value); 

stepController.addEventListener('click' , (event) => {
    stepValue = Number(event.target.value);
})

decBtn.addEventListener('click', (event)=>{
    displayValue -= stepValue;
    screen.textContent = displayValue;
})

incBtn.addEventListener('click', (event)=>{
    displayValue += stepValue;
    screen.textContent = displayValue;
})

resetBtn.addEventListener('click', (event)=>{
    displayValue = 0;
    screen.textContent = displayValue
})










