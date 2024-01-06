function calculateFactorial(n) {

    if (n === 1) return 1

    return calculateFactorial(n -1 ) * n

}
//

console.log(calculateFactorial(5));