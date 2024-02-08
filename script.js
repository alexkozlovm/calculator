const display = document.querySelector(".display");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const sliderCircle = document.querySelector(".slider .circle ");

display.innerHTML = "0";

window.addEventListener('keydown', handleKeyboardInput)

if (systemSettingDark.matches) {
    body.style.backgroundColor = "var(--clr-slate)";
    header.style.backgroundColor = "var(--clr-slate-dark)";
    main.style.backgroundColor = "var(--clr-slate)";
    footer.style.backgroundColor = "var(--clr-slate-dark)";
    sliderCircle.style.backgroundColor = "var(--clr-main)";
}

function appendNumber(number) {
    if (display.innerHTML === "0") {
        display.innerHTML = number;
        return;
    }
    display.innerHTML += number;
}
function appendSomething(type, thing) {
    if (display.innerHTML === 'Error!' || display.innerHTML === 'NaN' || display.innerHTML === 'NaN' ) clearDisplay()
    if (display.innerHTML.length > 15) return;
    if (type === "operator") appendOperator(thing)
    if (type === "number") appendNumber(thing)
}
function appendOperator(operator) {
    display.innerHTML += ` ${operator} `;
}

function clearDisplay() {
    display.innerHTML = "0";
}

function deleteLast() {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === "") display.innerHTML = "0";
}

function calculate() {
    let result; 
    if (display.innerHTML.includes("+")) {
        result = display.innerHTML.split(" + ").reduce((a, b) => Number(a) + Number(b));
    }  
    else if (display.innerHTML.includes("-")) {
        result = display.innerHTML.split(" - ").reduce((a, b) => Number(a) - Number(b));
    }
    else if (display.innerHTML.includes("*")) {
        result = display.innerHTML.split(" * ").reduce((a, b) => Number(a) * Number(b));
    }
    else if (display.innerHTML.includes("/")) {
        result = display.innerHTML.split(" / ").reduce((a, b) => Number(a) / Number(b));
    }
    else {
        result = "Error!"
    }
    display.innerHTML = result;
}

function handleKeyboardInput(input) {
    if (input.key >= 0 && input.key <= 9 || input.key === '.'   ) appendSomething('number', input.key)
    if (input.key === '=' || input.key === 'Enter') calculate()
    if (input.key === 'Backspace') deleteLast()
    if (input.key === 'Escape') clearDisplay()
    if (input.key === '+' || input.key === '-' || input.key === '*' || input.key === '/')
    appendSomething('operator', input.key);
}

function themeChange(theme) {
    
}