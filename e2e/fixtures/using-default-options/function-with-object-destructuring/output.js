function plus({
  a,
  b
}) {
  console.log('[/e2e/fixtures/using-default-options/function-with-object-destructuring/code.js:1]', '[fn] plus() called with', 'a = [ ' + a + ' ],', 'b = [ ' + b + ' ]');

  try {} catch {
    console.error('[/e2e/fixtures/using-default-options/function-with-object-destructuring/code.js:3]', '[fn] plus() catch');
  }

  try {} catch (e) {
    console.error('[/e2e/fixtures/using-default-options/function-with-object-destructuring/code.js:6]', '[fn] plus() catch with', 'e = [ ' + e + ' ]');
  }

  return a + b;
}
