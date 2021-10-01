// import functions

import { add } from './calculations.js';
import { sub } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

// add field
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-Button');
const addAnswer = document.getElementById('add-Answer');

// sub field
const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-Button');
const subAnswer = document.getElementById('sub-Answer');

// multiplyfield
const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-Button');
const multiplyAnswer = document.getElementById('multiply-Answer');

// divide field
const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-Button');
const divideAnswer = document.getElementById('divide-Answer');


//add button
addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const result = add(num1, num2);
    addAnswer.textContent = result;

});

//sub button
subButton.addEventListener('click', () => {
    const num1 = Number(subNumber1.value);
    const num2 = Number(subNumber2.value);
    const result = sub(num1, num2);
    subAnswer.textContent = result;

});
//multiply button
multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyNumber1.value);
    const num2 = Number(multiplyNumber2.value);
    const result = multiply(num1, num2);
    multiplyAnswer.textContent = result;

});
//divide button
divideButton.addEventListener('click', () => {
    const num1 = Number(divideNumber1.value);
    const num2 = Number(divideNumber2.value);
    const result = divide(num1, num2);
    divideAnswer.textContent = result;


});