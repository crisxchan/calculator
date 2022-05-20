var total = null;
var input = null;
var current = null;
var op;
var equalsFlag = false;

const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear');
const currentField = document.querySelector('#current');
const inputField = document.querySelector('#input');

const add = (total, input) => total + input;
const subtract = (total, input) => total - input;
const multiply = (total, input) => total * input;
const divide = (total, input) => total / input;

function reset(){
    total = null;
    input = null;
    current = null;
    inputField.innerHTML = '';
    currentField.innerHTML = '0';
}

function stage(e){
    current = currentField.innerHTML;
    currentField.innerHTML = '0';

    if(equalsFlag){
        inputField.innerHTML = '';
        equalsFlag = false;
    }

    if(inputField.innerHTML != ''){
        var index = inputField.innerHTML.indexOf(' ');
        total = inputField.innerHTML.substring(0, index);
        input = current;
        total = operator(op, total, input);

        if(e.target.dataset.value === 'equals'){
            inputField.innerHTML += `${current} =`;
            currentField.innerHTML = total; 
            equalsFlag = true;
        }
        else inputField.innerHTML = total
    } else {
        input = current;
        inputField.innerHTML = input
    }

    switch(e.target.dataset.value) {
        case "divide":
            op = '/'
            inputField.innerHTML += ' / '
            break;

        case "multiply":
            op = 'x'
            inputField.innerHTML += ' x '
            break;

        case "subtract":
            op = '-'
            inputField.innerHTML += ' - '
            break;

        case "add":
            op = '+'
            inputField.innerHTML += ' + '
            break;

        case "equals":
            console.log('equals');
            break;

        case "clear":
            reset();
            break;
    }
}

function initBtns(){
    const numBtns = document.querySelectorAll('.num-button');
    const opBtns = document.querySelectorAll('.op-button');

    numBtns.forEach(btn => btn.addEventListener('click', (e) => {
        if (currentField.innerHTML == '0') currentField.innerHTML = '';
        currentField.innerHTML += e.target.dataset.value;
    }));

    opBtns.forEach(btn => btn.addEventListener('click', stage));
}

function operator(operator, total, current){
    // console.log(`op is ${operator} \nnum1 is ${total} \nnum2 is ${current}`);
    if(operator === '+'){
        return add(parseInt(total), parseInt(current));
    }
    if(operator === '-'){
        return subtract(parseInt(total), parseInt(current));
    }
    if(operator === '/'){
        return divide(parseInt(total), parseInt(current));
    }
    if(operator === 'x'){
        return multiply(parseInt(total), parseInt(current));
    }
}

initBtns();