function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "Don't divide by zero!"
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b)
    } 
    else if (operator === '-') {
        return subtract(a, b)
    }
    else if (operator === '*') {
        return multiply(a, b)
    }
    else if (operator === '/') {
        return divide(a, b)
    }
    else {
        return 'Invalid Operator'
    }
}

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        const digit = button.dataset.digit;
        if (display.textContent === "0" || justEvaluated) {
            display.textContent = digit;
            justEvaluated = false;
        } else {
            display.textContent += digit;
        }
    });
});

let firstNumber;
let operator;
let secondNumber;
let justEvaluated = false;

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        if (firstNumber && operator && display.textContent !== "0") {
            firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(display.textContent));
        } else {
            firstNumber = display.textContent;
        }
            operator = button.dataset.operator;
        display.textContent = 0;
    });
});

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {
    if (!operator) {
        return;
    } else {
        secondNumber = display.textContent;
        const ans = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));

        if (typeof(ans) !== "number") {
            display.textContent = ans;
        } else {
            display.textContent = parseFloat(ans.toFixed(4));
        }
        firstNumber = null;
        operator = null;
        justEvaluated = true;
    }
});

const acButton = document.querySelector("#ac");

acButton.addEventListener("click", () => {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    justEvaluated = false;
    display.textContent = 0;
});