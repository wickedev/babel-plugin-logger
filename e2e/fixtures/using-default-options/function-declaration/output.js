class B {
  division(a, b) {
    console.log('[using-default-options/function-declaration/input.js:2] division() called', 'with:', 'a = [', a, '],', 'b = [', b, ']');
    return a / b;
  }

}

function multiply(n) {
  console.log('[using-default-options/function-declaration/input.js:7] multiply() called', 'with:', 'n = [', n, ']');
  return n * n;
}

function fun() {
  console.log('[using-default-options/function-declaration/input.js:11] fun() called');
}
