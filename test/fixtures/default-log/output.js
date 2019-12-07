class A {
    plus = (a, b) => {
        console.log(
            '[A] plus() called with',
            'a = [ ' + a + ' ],',
            'b = [ ' + b + ' ]',
        )

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
        console.log(
            '[B] division() called with',
            'a = [ ' + a + ' ],',
            'b = [ ' + b + ' ]',
        )

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
    console.log('[fn] multiply() called with', 'n = [ ' + n + ' ]')
    return n * n
}

function plus({ a, b }) {
    console.log(
        '[fn] plus() called with',
        'a = [ ' + a + ' ],',
        'b = [ ' + b + ' ]',
    )
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
