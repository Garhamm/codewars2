// 8 kyu What is between?

function between(a, b) {
    let newArr = []
    for (let i = a; i<=b; i++) {
         newArr.push(i)
    }
    return newArr
  }

 console.log(between(1,4))
 console.log(between(2,4300))