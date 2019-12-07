function multiply(n) {
  console.groupCollapsed('[/e2e/fixtures/using-group-options/function-with-argument/code.js:1]', '[fn] multiply() called with');
  console.log('n = [ ', n, ' ]');
  console.groupEnd();

  try {} catch {
    console.error('[/e2e/fixtures/using-group-options/function-with-argument/code.js:3]', '[fn] multiply() catch');
  }

  try {} catch (e) {
    console.error('[/e2e/fixtures/using-group-options/function-with-argument/code.js:6]', '[fn] multiply() catch with', 'e = [ ' + e + ' ]');
  }

  return n * n;
}
