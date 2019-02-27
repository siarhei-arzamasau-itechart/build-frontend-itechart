const number1 = 5;
const number2 = 10;

const sum = (num1, num2) => num1 + num2;







function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;