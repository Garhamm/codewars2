
// 8 kyu
// Is the string uppercase?
// 2817485% of 3,0248,181 of 26,230donaldsebleung2 Issues Reported

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

function allUpperCase(input) {
    return input.toUpperCase()
}

console.log(allUpperCase('This is a story of a girl.'))
