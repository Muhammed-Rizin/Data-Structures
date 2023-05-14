// Factorial
const factorial = val => {
    if(val <= 1){
        return val
    }
    return val*factorial(val-1)
}

// Fibnacci sequence
const fibonacci = (val) => {
    if(val < 2 ){
        return val
    }
    return fibonacci(val-1) + fibonacci(val-2)
}

// Sum Of Numbers
const sumOfNumbers = val => {
    if(val < 1){
        return val
    }
    return val+sumOfNumbers(val-1)
}

// Count Down
const countDown = val => {
    if(val < 1){
        return val
    }
    console.log(val);
    return countDown(val-1)
}

console.log(factorial(5));
//          Out put :- 120


console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8

console.log(sumOfNumbers(5)); // 15

countDown(5)