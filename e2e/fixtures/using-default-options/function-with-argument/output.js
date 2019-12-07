function multiply(n) {
  console.log('[/e2e/fixtures/using-default-options/function-with-argument/code.js:1]', '[fn] multiply() called with', 'n = [ ' + n + ' ]');

  try {} catch {
    console.error('[/e2e/fixtures/using-default-options/function-with-argument/code.js:3]', '[fn] multiply() catch');
  }

  try {} catch (e) {
    console.error('[/e2e/fixtures/using-default-options/function-with-argument/code.js:6]', '[fn] multiply() catch with', 'e = [ ' + e + ' ]');
  }

  return n * n;
}
