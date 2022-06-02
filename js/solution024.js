
// 8 kyu
// Reversed sequence
// 35010892% of 5,68820,518 of 54,809jamad1 Issue Reported

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = []
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }return arr.reverse()
  };

  console.log(reverseSeq(12))