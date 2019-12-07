function fun() {
  console.log('[/e2e/fixtures/using-group-options/function/code.js:1]', '[fn] fun() called');

  try {} catch {
    console.error('[/e2e/fixtures/using-group-options/function/code.js:3]', '[fn] fun() catch');
  }

  try {} catch (e) {
    console.error('[/e2e/fixtures/using-group-options/function/code.js:6]', '[fn] fun() catch with', 'e = [ ' + e + ' ]');
  }
}
