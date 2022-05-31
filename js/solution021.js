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
    let sortedArr = arr.sort(function (a,b) {return a - b;}) 
    // subtract each pair of numbers
    let subtractedArr = sortedArr
    let sum = 0;
    for (let i = 0; i < sortedArr.length -1; i++){
        sum += (sortedArr[i] - sortedArr[i+1])
    } return -sum

    // return sum of all number pairs

}
// numArray = numArray.sort(function (a, b) {  return a - b;  })
// let sum = 0;
//   for (let i = 0; i < sorted.length - 1; i++) {
//     sum += (arr[i] - arr[i + 1]);
//   }

sumOfDifferences([1,2,10,5,6,1])
sumOfDifferences([-3,-2,-1, -5, -26, 31, 8])
