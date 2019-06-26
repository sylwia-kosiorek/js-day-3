function add (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return NaN
    }

    return a + b
}

function multiply (a, b){
    return a * b
}

function square (a){
    return a * a
}

function square (a){
    return multiply (a, a)
}
// Zlozenie funkcji - wykorzystalismy multiply w square
