const display = document.querySelector(".display");
display.innerHTML = "0";
window.addEventListener('keydown', handleKeyboardInput)

function appendNumber(number) {
    if (display.innerHTML === "0") {
        display.innerHTML = number;
        return;
    }
    display.innerHTML += number;
}

function appendOperator(operator) {
    display.innerHTML += ` ${operator} `;
}

function clearDisplay() {
    display.innerHTML = "0";
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
    if (input.key >= 0 && input.key <= 9 || input.key === '.'   ) appendNumber(input.key)
    if (input.key === '=' || input.key === 'Enter') calculate()
    if (input.key === 'Escape') clearDisplay()
    if (input.key === '+' || input.key === '-' || input.key === '*' || input.key === '/')
    appendOperator(input.key);
}