
// 8 kyu
// Count of positives / sum of negatives

// Instructions
// Output

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    // Check to see if array is null/negative. If it is, return an empty array
    let positives = 0
    let negatives = 0
    if(input == null || input == 0) {
        return [];
    }else{
        input.map((val) => {
            if(val > 0){
                positives += 1
            }else if(val < 0){
                negatives = negatives + val
            }else{}
        })
        return [positives, negatives]
    }

}