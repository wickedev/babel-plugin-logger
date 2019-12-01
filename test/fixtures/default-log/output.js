class A {
    plus = (a, b) => {
        console.log(
            '[A] plus() called with',
            'a = [ ' + a + ' ],',
            'b = [ ' + b + ' ]',
        )
        return a + b
    }
}

class B {
    division(a, b) {
        console.log(
            '[B] division() called with',
            'a = [ ' + a + ' ],',
            'b = [ ' + b + ' ]',
        )
        return a / b
    }
}

function multiply(n) {
    console.log('[fn] multiply() called with', 'n = [ ' + n + ' ]')
    return n * n
}

function plus({
  a,
  b
}) {
  console.log('[fn] plus() called with', 'a = [ ' + a + ' ],', 'b = [ ' + b + ' ]');
  return a + b;
}

function fun() {
    console.log('[fn] fun() called')
}
