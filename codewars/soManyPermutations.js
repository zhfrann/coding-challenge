// In this kata, your task is to create all permutations of a non-empty 
// input string and remove duplicates, if present.
// Create as many "shufflings" as you can!

// Examples:
// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

function permutations(string) {
    let results = [''];

    for (const char of string) {
        const newResults = new Set();
        for (const perm of results) {
            for (let i = 0; i <= perm.length; i++) {
                const newPerm = perm.slice(0, i) + char + perm.slice(i);
                newResults.add(newPerm);
            }
        }
        results = Array.from(newResults);
    }

    return results;
}

console.log(permutations('a'));       // ['a']
console.log(permutations('ab'));      // ['ab', 'ba']
console.log(permutations('abc'));     // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('aabb'));    // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']