function printOutput(number) {
    document.querySelector('.top').textContent = number;
}

function getOutput() {
    const total = document.querySelector('.top').textContent;
    return total;
}

function onClickNumber() {
    let value = getOutput();
    value += this.id;
    printOutput(value);
}

function onClickOperator() {
    console.log(this);
}

function init() {
    const btns = document.querySelectorAll('.btn-number');
    btns.forEach(btn => {
        btn.addEventListener('click', onClickNumber);
    });

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', onClickOperator);
    });
}

init();

