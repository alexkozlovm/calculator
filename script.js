/* Element selectors */
const display = document.querySelector(".display");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const sliderCircle = document.querySelector(".slider .circle ");
const slider = document.querySelector("input[type='checkbox']");

/* Initial display */
display.innerHTML = "0";

/* Event listeners for theme switching and keyboard input */
window.addEventListener('keydown', handleKeyboardInput)
slider.addEventListener('change', choseTheme)


/* Theme preference detection and theme switching functionality */
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
if (systemSettingDark.matches) darkTheme();

/* Theme switch functions */
function choseTheme() {
    if (slider.checked) {
        darkTheme();
    } else {
        lightTheme();
    }
}
function lightTheme() { 
        slider.checked = false;
        body.style.backgroundColor = "var(--clr-main)";
        header.style.backgroundColor = "var(--clr-main-dark)";
        main.style.backgroundColor = "var(--clr-main)";
        footer.style.backgroundColor = "var(--clr-main-dark)";
        sliderCircle.style.backgroundColor = "var(--clr-slate)";
}
function darkTheme() {
        slider.checked = true;
        body.style.backgroundColor = "var(--clr-slate)";
        header.style.backgroundColor = "var(--clr-slate-dark)";
        main.style.backgroundColor = "var(--clr-slate)";
        footer.style.backgroundColor = "var(--clr-slate-dark)";
        sliderCircle.style.backgroundColor = "var(--clr-main)";
}

/* Calculator logic for appending numbers, operators, clearing display, deleting last entry, and calculating results */
function appendNumber(number) {
    /* Adds number to display */
    if (display.innerHTML === "0") {
        display.innerHTML = number;
        return;
    }
    display.innerHTML += number;
}
function appendSomething(type, thing) {
    if (display.innerHTML === 'Error!' || display.innerHTML === 'NaN' || display.innerHTML === 'NaN' ) clearDisplay()
    if (display.innerHTML.length > 13) return;
    if (type === "operator") appendOperator(thing)
    if (type === "number") appendNumber(thing)
}
function appendOperator(operator) {
    /* Adds operator to display with spaces for readability */
    display.innerHTML += ` ${operator} `;
}

function clearDisplay() {
    /* Clears the calculator display */
    display.innerHTML = "0";
}

function deleteLast() {
    /* Deletes the last character or operation from display */
    let content = display.innerHTML;
    if (content.endsWith(' + ') || content.endsWith(' - ') || content.endsWith(' * ') || content.endsWith(' / ')) {
        display.innerHTML = content.slice(0, -3);
    } else {
        display.innerHTML = content.slice(0, -1);
    }
    if (display.innerHTML === "") display.innerHTML = "0";
}

function calculate() {
     /* Calculation logic, including handling for different operations */
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
    /* Allows keyboard input for numbers, operators, and other commands */
    if (input.key >= 0 && input.key <= 9 || input.key === '.'   ) appendSomething('number', input.key)
    if (input.key === '=' || input.key === 'Enter') calculate()
    if (input.key === 'Backspace') deleteLast()
    if (input.key === 'Escape') clearDisplay()
    if (input.key === '+' || input.key === '-' || input.key === '*' || input.key === '/')
    appendSomething('operator', input.key);
}

