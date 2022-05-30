// 8 kyu
// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


function sumOfDifferences(arr) {
    // sort input array
    arr.sort()
    // subtract each pair of numbers
    return arr
    // return sum of all number pairs

}


sumOfDifferences([1,2,10]) // Expected output: 9
sumOfDifferences([-3,-2,-1]) // Expected output: 2
