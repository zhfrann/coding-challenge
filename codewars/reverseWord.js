// Reverse every single word in a sentence.
// "This is an example!" = "shiT si na !elpmaxE"

function reverseWord(str) {
    return str.split(" ")  // split every word into array
        .map((word) => word.split("").reverse().join("")) // reverse every word
        .join(" ") // merge the word from array into string
}

console.log(reverseWord("This is an example!"))  // "shiT si na !elpmaxE"
console.log(reverseWord("Hello World!"))  // "olleH !dlroW"