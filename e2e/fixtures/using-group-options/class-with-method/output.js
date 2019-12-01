class A {
  division(a, b) {
    console.groupCollapsed('[/e2e/fixtures/using-group-options/class-with-method/code.js:2]', '[A] division() called with');
    console.log('a = [ ', a, ' ]');
    console.log('b = [ ', b, ' ]');
    console.groupEnd();
    return a / b;
  }

}
