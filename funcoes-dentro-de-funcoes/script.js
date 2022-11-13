function addSquares(a, b) {
    // function square(x) {
    //     return x ** 2
    // }

    const square = (x) => x ** 2

    return square(a) + square(b)
}

console.log(addSquares(2, 4))


