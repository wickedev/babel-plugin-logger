class B {
  division(a, b) {
    console.log('[input.js:2]', 'division() called', 'with:', 'a = [' + a + '],', 'b = [' + b + ']');
    return a / b;
  }

}

function multiply(n) {
  console.log('[input.js:7]', 'multiply() called', 'with:', 'n = [' + n + ']');
  return n * n;
}

function fun() {
  console.log('[input.js:11]', 'fun() called');
}
