const display = document.querySelector(".display");

function appendNumber(number) {
    display.innerHTML += number;
}

function appendOperator(operator) {
    display.innerHTML += ` ${operator} `;
}

function clearDisplay() {
    calculator.display.value = "";
}

function updateDisplay() {
    calculator.display.value = calculator.display.value;
}

function calculate() {
    calculator.display.value = eval(calculator.display.value);
}
