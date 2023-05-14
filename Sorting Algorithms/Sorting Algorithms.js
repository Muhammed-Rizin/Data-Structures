// 1 
// Bubble sort 
// The simplest sorting algorithm and it works by repeatedly swaping the adjacent elements if they are in wrong orders

const bubbleSort = array => {
    let swapped  
    // If elements are swapped repeat the comparison
    // To keep track that use a Variable 
    // 6 3 0 5
    do {
        swapped = false
        for(let i =0; i< array.length -1 ; i++){
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp   
                swapped = true
            }
        }
    } while (swapped);
    // If the elements are swapped, go through the array to make sure there is no more swapping required
}

// 2
// Insertion Sort

const insertionSort = array => {
    for(let i = 1; i< array.length; i++){
        let numberToInsert = array[i]
        let j = i-1
        while(j >= 0 && array[j] > numberToInsert){
            array[j+1] = array[j]
            j -= 1
        }
        array[j+1] = numberToInsert
    }
}

// 3
// quick sort

const quickSort = array => {
    // Exit condition for recursion
    if(array.length < 2){
        return array
    }
    // Set a pivot elemt
    let pivot = array[array.length -1]
    let left = []
    let right = []
    for(let i = 0; i< array.length -1; i++){
        if(array[i] < pivot){
            // Smaller than pivot to left
            left.push(array[i])
        }else {
            // Greater than pivot to right
            right.push(array[i])
        }
    }

    // it will repeat
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// Merge sort
const mergeSort = array => {
    // for recurtion exit
    if(array.length < 2){
        return array
    }

    const mid = Math.floor(array.length / 2)
    const leftArr = array.slice(0,mid)
    const rightArr = array.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

const merge = (leftArr,rightArr) => {
    let sort = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sort.push(leftArr.shift())
        }else {
            sort.push(rightArr.shift())
        }
    }
    return [...sort, ...leftArr, ...rightArr]
}

// Selection sort
const selectionSort = array => {
    for(let i = 0; i<array.length;i++){
        let min = i
        for(let j = i+1; j< array.length; j++){
            if(array[j] < array[min]){
                min = j
            }
        }

        if(min != i){
            let temp = array[min]
            array[min] = array[i]
            array[i] = temp
        }
    }
}


let array = [ 6, 3, 2, 5 ]

bubbleSort(array)       // [ 2, 3, 5, 6 ]
insertionSort(array)    // [ 2, 3, 5, 6 ]
console.log(quickSort(array))
console.log(mergeSort(array));
selectionSort(array)
console.log(array);
