
// 8 kyu
// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

function doubleChar(str) {
    let newString = []
    for(let i = 0; i<=str.length; i++) {
       newString.push(str[i])
       newString.push(str[i])
    }return newString.join('')
}
  

console.log(doubleChar('String'))
console.log(doubleChar('Hello World'))
console.log(doubleChar('12345_!'))
