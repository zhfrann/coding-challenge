// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function (a, b) {
    let result = "";
    let carry = 0;
    let aPointer = a.length - 1;
    let bPointer = b.length - 1;

    while (aPointer >= 0 || bPointer >= 0 || carry > 0) {
        const digitA = aPointer >= 0 ? parseInt(a[aPointer]) : 0;
        const digitB = bPointer >= 0 ? parseInt(b[bPointer]) : 0;

        const sum = digitA + digitB + carry;
        result = (sum % 2) + result;

        carry = Math.floor(sum / 2);

        aPointer--;
        bPointer--;
    }

    return result;
};

//* With built-in function
var addBinary2 = function (a, b) {
    const digitA = parseInt(a, 2);
    const digitB = parseInt(b, 2);

    return (digitA + digitB).toString(2);
}

console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101