class A {
  division(a, b) {
    console.groupCollapsed('[input.js:2]', '[A] division() called');
    console.log('a = [ ', a, ' ]');
    console.log('b = [ ', b, ' ]');
    console.groupEnd();
    return a / b;
  }

}

function multiply(n) {
  console.groupCollapsed('[input.js:7]', '[fn] multiply() called');
  console.log('n = [ ', n, ' ]');
  console.groupEnd();
  return n * n;
}

function plus({
  a,
  b
}) {
  console.groupCollapsed('[input.js:11]', '[fn] plus() called');
  console.log('a = [ ', a, ' ]');
  console.log('b = [ ', b, ' ]');
  console.groupEnd();
  return a + b;
}

function fun() {
  console.log('[input.js:15]', '[fn] fun() called');
}
