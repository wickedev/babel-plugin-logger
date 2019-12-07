class A {
  division(a, b) {
    console.log('[/e2e/fixtures/using-default-options/class-with-method/code.js:2]', '[A] division() called with', 'a = [ ' + a + ' ],', 'b = [ ' + b + ' ]');

    try {} catch {
      console.error('[/e2e/fixtures/using-default-options/class-with-method/code.js:4]', '[A] division() catch');
    }

    try {} catch (e) {
      console.error('[/e2e/fixtures/using-default-options/class-with-method/code.js:7]', '[A] division() catch with', 'e = [ ' + e + ' ]');
    }

    return a / b;
  }

}
