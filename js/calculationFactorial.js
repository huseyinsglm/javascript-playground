function calculationFactorial(number) {
  let conclusion = 1;
  for ( let i = 1; i <= number; i++) {
    conclusion = conclusion * i
  }
  return conclusion;
}

console.log("factorial of this number" + calculationFactorial(5));
console.log("factorial of this number" + calculationFactorial(6));
console.log("factorial of this number" + calculationFactorial(7));

