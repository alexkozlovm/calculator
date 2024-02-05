const display = document.querySelector(".display");
display.innerHTML = "0";

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
    display.innerHTML = "";
}

function updateDisplay() {
    calculator.display.value = calculator.display.value;
}

function calculate() {
    calculator.display.val
}
