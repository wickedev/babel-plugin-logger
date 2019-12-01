class A {
    plus = (a, b) => {
        console.groupCollapsed('[A] plus() called with')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()
        return a + b
    }
}

class B {
    division(a, b) {
        console.groupCollapsed('[B] division() called with')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()
        return a / b
    }
}

function multiply(n) {
    console.groupCollapsed('[fn] multiply() called with')
    console.log('n = [ ', n, ' ]')
    console.groupEnd()
    return n * n
}

function plus({ a, b }) {
    console.groupCollapsed('[fn] plus() called with')
    console.log('a = [ ', a, ' ]')
    console.log('b = [ ', b, ' ]')
    console.groupEnd()
    return a + b
}

function fun() {
    console.log('[fn] fun() called')
}
