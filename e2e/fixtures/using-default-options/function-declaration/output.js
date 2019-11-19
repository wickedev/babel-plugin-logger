class B {
  division(a, b) {
    console.log('division() called', 'with:', 'a = [', a, '],', 'b = [', b, ']');
    return a / b;
  }

}

function multiply(n) {
  console.log('multiply() called', 'with:', 'n = [', n, ']');
  return n * n;
}

function fun() {
  console.log('fun() called');
}
