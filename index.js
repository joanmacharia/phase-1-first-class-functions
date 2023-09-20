function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function namedFunction () {
        return namedFunction
    }
}

function returnsAnAnonymousFunction() {
    return () => anonymousFunction
}



