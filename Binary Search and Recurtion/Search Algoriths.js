// Linear Search
let array = [5,2,10,4,6]
let value = 10

const findValue = value => {
    for(let i = 0; i< array.length ;i++){
        if(array[i] == value){
            console.log(i);
            break
        }
    }
    return -1
}

findValue(value)

// Binery search
array = [4,6,8,10]
value = 8

const binerySearch = value2 => {
    let leftIndex = 0
    let rightIndex = array.length -1

    while (leftIndex <= rightIndex) {
        let middel = Math.floor((rightIndex + leftIndex) / 2)
        if(value2 == array[middel]){
            return middel
        }
        if(value2 < array[middel]){
            rightIndex = middel - 1
        }else {
            leftIndex  = middel + 1
        }
    }

    return -1
}

console.log(binerySearch(10)); // 3
console.log(binerySearch(8)); // 2
console.log(binerySearch(1));//-1

// Recursive Binary search
const recursiveBinarySearch = target => {
    return search(target, 0, array.length-1)
}
const search = (target , leftIndex, rightIndex ) => {
    if(leftIndex > rightIndex){
        return -1
    }
    let middel = Math.floor((leftIndex + rightIndex) / 2)
    if(target == array[middel]){
        return middel
    }
    if(target < middel){
        return search(target, leftIndex, middel -1)
    }else {
        return search(target, middel +1, rightIndex)
    }
}


console.log(recursiveBinarySearch(10));