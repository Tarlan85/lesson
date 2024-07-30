let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let operand1 = null;
let operand2 = null;

function ButtonClick(value) {
    if (!isNaN(value) || value === '.') {
        currentInput += value;
        display.innerText = currentInput;
    } else if (value === 'AC') {
        currentInput = '';
        currentOperator = '';
        operand1 = null;
        operand2 = null;
        display.innerText = '0';
    } else if (value === '=') {
        if (operand1 !== null && currentOperator !== '') {
            operand2 = parseFloat(currentInput);
            let result = calculate(operand1, operand2, currentOperator);
            display.innerText = result;
            currentInput = result.toString();
            operand1 = result;
            operand2 = null;
            currentOperator = '';
        }
    } else {
        if (currentInput !== '') {
            if (operand1 === null) {
                operand1 = parseFloat(currentInput);
            } else if (currentOperator !== '') {
                operand2 = parseFloat(currentInput);
                operand1 = calculate(operand1, operand2, currentOperator);
                display.innerText = operand1;
            }
            currentInput = '';
        }
        currentOperator = value;
    }
}

function calculate(op1, op2, operator) {
    switch (operator) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        case '*':
            return op1 * op2;
        case '/':
            if (op2 === 0) {
                alert("Division by zero is not allowed");
                return op1;
            }
            return op1 / op2;
        default:
            return 0;
    }
}
