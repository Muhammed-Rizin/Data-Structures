// fibnacci
const fibnacci = value => {
    let fib = [0,1]
    
    for(let i = 2; i < value ; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    console.log(fib);
}
// O(n)
// fibnacci(6) // [ 0, 1, 1, 2, 3, 5 ]

// Factorial
const factorial = value => {
    let fac = 1
    for(let i = 1; i <= value; i++){
        fac *= i
    }
    console.log(fac);
}
// factorial(5) // 120

// Prime number
const prime = array => {
    for(let i = 0; i < array.length; i++){
        let flag = 0
        for(let j = 2; j< array.length -1; j++){
            if(array[i] % j  == 0 || array[i] == 1){
                flag = 1
            }
        }
        if(array[i] == 2){
            flag = 0
        }
        if(flag == 0){
            console.log(array[i]);
        }
    }
}

const isNumberPrime = value => {
    if (value <= 1){
        return false
    }

    for(let i = 2; i < value -1; i++){
        if(value % i == 0){
            return false
        }
    }
    return true
}

// prime([ 0, 1, 1, 2, 3, 5 ]) // 2 5
// console.log(isNumberPrime(0)); // false
// console.log(isNumberPrime(1)); // false 
// console.log(isNumberPrime(2)); // true
// console.log(isNumberPrime(5)); // true
// console.log(isNumberPrime(6)); // false 
// console.log(isNumberPrime(7)); // true

// Power two
const powerofTwo = value => {
    if(value == 1){
        return true
    }
    if(value < 1){
        return false
    }
    return powerofTwo((value / 2))
}


console.log(powerofTwo(516));
