
// 8 kyu
// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
    let goodCount = 0
     x.forEach((element) => {
        if(element === 'good'){
            goodCount += 1
            // console.log(goodCount)
        }
    });
    if(goodCount >= 3){
        return 'I smell a series!'
    }else if(goodCount == 1 || goodCount == 2){
        return 'Publish!'
    }else{
        return 'Fail!'
    }
}

// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))
// console.log(well(["bad","bad","bad","good","bad","bad","bad","bad","bad","good","bad"]))
console.log(well(['bad', 'bad', 'bad']))