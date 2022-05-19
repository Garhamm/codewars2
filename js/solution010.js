
// 8 kyu
// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.


function squareOrSquareRoot(array) {
    let newArr = []
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // if element has square root, return square root
        if((Math.sqrt(array[i])) % 1 === 0) {
            console.log(Math.sqrt(array[i]))
            newArr.push(Math.sqrt(array[i]))
         // else return the square of the element
        }else if (Math.sqrt(array[i]) % 1 !== 0){
            newArr.push(array[i]**2)
        }
    }return newArr
    
}
