class A {
    plus = (a, b) => {
        console.groupCollapsed('[A] plus() called with')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()

        try {
        } catch {
            console.error('[A] plus() catch')
        }

        try {
        } catch (e) {
            console.error('[A] plus() catch with', 'e = [ ' + e + ' ]')
        }

        return a + b
    }
}

class B {
    division(a, b) {
        console.groupCollapsed('[B] division() called with')
        console.log('a = [ ', a, ' ]')
        console.log('b = [ ', b, ' ]')
        console.groupEnd()

        try {
        } catch {
            console.error('[B] division() catch')
        }

        try {
        } catch (e) {
            console.error('[B] division() catch with', 'e = [ ' + e + ' ]')
        }

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
    try {
    } catch {
        console.error('[fn] fun() catch')
    }

    try {
    } catch (e) {
        console.error('[fn] fun() catch with', 'e = [ ' + e + ' ]')
    }
}

const arrow = () => {
    console.log('[fn] arrow() called')

    try {
    } catch {
        console.error('[fn] arrow() catch')
    }

    try {
    } catch (e) {
        console.error('[fn] arrow() catch with', 'e = [ ' + e + ' ]')
    }
}
