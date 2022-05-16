
// 8 kyu
// How good are you really?


function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = 0;
    totalPoints = classPoints.reduce((a, b) => a+b) 
    // console.log(totalPoints)
    let classAverage = totalPoints/classPoints.length
    if(yourPoints > classAverage){
        return true
    }else{
        return false
    }
    // console.log(classAverage)
  }

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
  