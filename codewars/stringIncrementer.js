// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    const match = strng.match(/\d+/);
    if (!match) return strng + "1";

    const num = match[0];
    const numAfterIncremented = String(Number(num) + 1).padStart(num.length, "0")

    return strng.slice(0, -num.length) + numAfterIncremented;
}

console.log(incrementString("foo")) //foo1
console.log(incrementString("foobar23")) //foobar24
console.log(incrementString("foo0042")) //foo0043
console.log(incrementString("foo9")) //foo10
console.log(incrementString("foo099")) //foo100