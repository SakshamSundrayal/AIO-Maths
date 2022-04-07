
// Addition Functionality
const addition = document.getElementById('ADD');

const addInput = addition.children[1];
const addOutput = addition.children[2];


addInput.addEventListener('input', ()=> {
    let elements = addInput.value.split(',');
    let result = 0;
    for (let i = 0; i < elements.length; i++) {
        result = result + parseFloat(elements[i]);
    }
    if (result == NaN) {
        addOutput.innerHTML = "Waiting for input...";
    }
    else {
        addOutput.innerHTML = result;
    }
});

// Addition end

// Subtraction Functionality
const subtract = document.getElementById('subtract');

const subInput = subtract.children[1];
const subOutput = subtract.children[2];


subInput.addEventListener('input', ()=> {
    let elements = subInput.value.split(',');
    let result = parseFloat(elements[0]);
    for (let i = 1; i < elements.length; i++) {
        result = result - (parseFloat(elements[i]) );
    }
    if (result == NaN) {
        subOutput.innerHTML = "Waiting for input...";
    }
    else {
        subOutput.innerHTML = result;
    }
});
// Subtract end

// Multiplication Functionality
const Multiplication = document.getElementById('multiply');

const mInput = Multiplication.children[1];
const mOutput = Multiplication.children[2];


mInput.addEventListener('input', ()=> {
    let elements = mInput.value.split(',');
    let result = 1;
    for (let i = 0; i < elements.length; i++) {
        result = result * parseFloat(elements[i]);
    }
    if (result == NaN) {
        mOutput.innerHTML = "Waiting for input...";
    }
    else {
        mOutput.innerHTML = result;
    }
});
// Multiplication ends

// Division Functionality
const division = document.getElementById('divide');

const dInput = division.children[1];
const dOutput = division.children[2];


dInput.addEventListener('input', ()=> {
    let elements = dInput.value.split(',');
    let result = parseFloat(elements[0]);
    for (let i = 1; i < elements.length; i++) {
        result = result / parseFloat(elements[i]);
    }
    if (result == NaN) {
        dOutput.innerHTML = "Waiting for input...";
    }
    else {
        dOutput.innerHTML = result;
    }
});

// Division Ends

// Factorisation Functionality
const factors = document.getElementById('factors');

const fInput = factors.children[1];
const fOutput = factors.children[2];


fInput.addEventListener('input', ()=> {
    let element = parseInt(fInput.value);
    let ff = [];
    for (let i = 2; i <= element;i++) {
        if (element % i == 0) {
            ff.push(i);
        }
    }
    fOutput.innerHTML = ff;
});

// Factors ends

// Square Root Functionality

const sqrt = document.getElementById('sqrt');

const sqrtInput = sqrt.children[1];
const sqrtOutput = sqrt.children[2];


sqrtInput.addEventListener('input', ()=> {
    let element = parseInt(sqrtInput.value);
    console.log(element);
    console.log(Math.sqrt(element));

    sqrtOutput.innerHTML = Math.sqrt(element);
});


// Square Root Ends