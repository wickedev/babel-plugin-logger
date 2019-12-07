function plus({
  a,
  b
}) {
  console.groupCollapsed('[/e2e/fixtures/using-group-options/function-with-object-destructuring/code.js:1]', '[fn] plus() called with');
  console.log('a = [ ', a, ' ]');
  console.log('b = [ ', b, ' ]');
  console.groupEnd();

  try {} catch {
    console.error('[/e2e/fixtures/using-group-options/function-with-object-destructuring/code.js:3]', '[fn] plus() catch');
  }

  try {} catch (e) {
    console.error('[/e2e/fixtures/using-group-options/function-with-object-destructuring/code.js:6]', '[fn] plus() catch with', 'e = [ ' + e + ' ]');
  }

  return a + b;
}
