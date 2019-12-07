class A {
  division(a, b) {
    console.groupCollapsed('[/e2e/fixtures/using-group-options/class-with-method/code.js:2]', '[A] division() called with');
    console.log('a = [ ', a, ' ]');
    console.log('b = [ ', b, ' ]');
    console.groupEnd();

    try {} catch {
      console.error('[/e2e/fixtures/using-group-options/class-with-method/code.js:4]', '[A] division() catch');
    }

    try {} catch (e) {
      console.error('[/e2e/fixtures/using-group-options/class-with-method/code.js:7]', '[A] division() catch with', 'e = [ ' + e + ' ]');
    }

    return a / b;
  }

}
