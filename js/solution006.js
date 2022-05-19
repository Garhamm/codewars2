// 8 kyu
// Calculate average


function find_average(array) {
  const sum = array.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  }, 0)
  const average = sum / array.length
  return average
  if(!average.number()){
    return 0
  }
}