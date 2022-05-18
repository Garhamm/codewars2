// 8 kyu What is between?

function between(a, b) {
    let newArr = []
    for (let i = a; i<=b; i++) {
         newArr += [i]
         console.log(newArr)
    }
    return newArr
  }

 console.log(between(1,4))