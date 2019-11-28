function plus({
  a,
  b
}) {
  console.groupCollapsed('[/e2e/fixtures/using-group-options/function-with-object-destructuring/code.js:1]', '[fn] plus() called');
  console.log('a = [ ', a, ' ]');
  console.log('b = [ ', b, ' ]');
  console.groupEnd();
  return a + b;
}
