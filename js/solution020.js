
// 7 kyu
// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
// jhijnijn


function squareDigits(num){
  const splitNums = num.toString().split('')
  const squaredNums = splitNums.map((element) => element ** 2)
  return Number(squaredNums.join(''))
  
}

console.log(squareDigits(6664))