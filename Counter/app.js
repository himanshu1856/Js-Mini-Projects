const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
let screen = document.querySelector(".screen > h1");
let stepController = document.querySelector(".control-jump > input")


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










