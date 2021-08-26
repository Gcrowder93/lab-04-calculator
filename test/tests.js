
import { add } from '../calculations.js';
import { sub } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';

const test = QUnit.test;


test('function add', (expect) => {

    const number1 = 1;
    const number2 = 2;
    
    const result = add(number1, number2);
    const expected = result;

    const actual = result;

    expect.equal(actual, expected);
    
});

//test sub


const test2 = QUnit.test;

test2('function subtract', (expect) => {

    const number1 = 1;
    const number2 = 2;

    const result = sub(number2, number1);
    const expected = result;

    const actual = result;

    expect.equal(actual, expected);

});
//test multiply


const test3 = QUnit.test;

test3('function multiply', (expect) => {

    const number1 = 1;
    const number2 = 2;
    
    const result = multiply(number1, number2);
    const expected = result;

    const actual = result;

    expect.equal(actual, expected);

});
//test divide



const test4 = QUnit.test;

test4('function divide', (expect) => {

    const number1 = 1;
    const number2 = 2;
    
    const result = divide(number1, number2);
    const expected = result;

    const actual = result;

    expect.equal(actual, expected);

});