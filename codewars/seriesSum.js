// Your task is to write a function which returns the n-th term of the following series,
// which is the sum of the first n terms of the sequence (n is the input parameter).

// Series : 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ....

// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return "0.00".
// You will only be given Natural Numbers as arguments.

// Sample :
// n = 1, 1.00
// n = 2, 1 + 1/4 = 1.25
// n = 5, 1 + 1/4 + 1/7 + 1/10 + 1/13 = 1.57

function SeriesSum(n) {
    if (n <= 0) {
        return "0.00"
    } else {
        let total = 0;
        for (let i = 0; i < n; i++) {
            total += 1 / (1 + (i * 3));
        }
        return total.toFixed(2)
    }
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5));