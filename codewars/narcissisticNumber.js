// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised
// to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153


function narcissistic(value) {
    let power = new String(value).length;

    let result = new String(value)
        .split("")  // break into array of digits
        .map((number) => number ** power)  // power each digit
        .reduce((prevValue, currentValue) => prevValue + currentValue, 0); // reduce every number in array

    return value == result;
}

console.log(narcissistic(153));  //true
console.log(narcissistic(1652));  //false