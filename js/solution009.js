
// 8 kyu
// Fake Binary


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
    binaryString = ''
    for(let i = 0; i <= x.length; i++){
        if(x[i] < 5){
            binaryString = binaryString + 0
        }else if(x[i] >= 5){
            binaryString = binaryString + 1
        }
    }  return(binaryString) 
}
fakeBin('39215632484763')