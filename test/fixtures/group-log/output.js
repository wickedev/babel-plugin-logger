class A {
    plus = (a, b) => {
        console.groupCollapsed('[A] plus() called')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()
        return a + b
    }
}

class B {
    division(a, b) {
        console.groupCollapsed('[B] division() called')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()
        return a / b
    }
}

function multiply(n) {
    console.groupCollapsed('[fn] multiply() called')
    console.log('n = [ ', n, ' ]')
    console.groupEnd()
    return n * n
}

function plus({ a, b }) {
    console.groupCollapsed('[fn] plus() called')
    console.log('a = [ ', a, ' ]')
    console.log('b = [ ', b, ' ]')
    console.groupEnd()
    return a + b
}

function fun() {
    console.log('[fn] fun() called')
}
