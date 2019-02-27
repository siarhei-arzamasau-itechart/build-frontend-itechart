import _ from 'lodash';
import sum from './sum';
import multiply from './multiply';

import './style.css';

const sumResult = sum(40, 2);
const multiplyResult = multiply(5, 10);

const arrowFunction = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
}

console.log('sumResult: ', sumResult);
console.log('multiplyResult: ', multiplyResult);
console.log('test');