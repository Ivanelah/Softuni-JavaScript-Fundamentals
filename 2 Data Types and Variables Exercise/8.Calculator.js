function calculator(num1, operator, num2) {
  let sum = 0;
  switch (operator) {
    case "+":
      console.log((num1 + num2).toFixed(2));
      break;
    case "-":
      console.log((num1 - num2).toFixed(2));
      break;
    case "*":
      console.log((num1 * num2).toFixed(2));
      break;
    case "/":
      console.log((num1 / num2).toFixed(2));
      break;
  }
}
calculator(25.5, "-", 3);