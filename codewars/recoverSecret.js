// There is a secret string which is unknown to you. Given a collection 
// of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere 
// before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and 
// that they contain sufficient information to deduce the original string. In particular, this means 
// that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function (triplets) {
    const graph = new Map();

    for (const [a, b, c] of triplets) {
        if (!graph.has(a)) graph.set(a, new Set());
        if (!graph.has(b)) graph.set(b, new Set());
        if (!graph.has(c)) graph.set(c, new Set());

        graph.get(b).add(a);
        graph.get(c).add(b);
    }

    const result = [];

    while (graph.size > 0) {
        const independentNodes = [...graph.entries()]
            .filter(([_, dependencies]) => dependencies.size === 0)
            .map(([node]) => node);

        if (independentNodes.length === 0) {
            throw new Error("Cycle detected in triplets");
        }

        for (const node of independentNodes) {
            result.push(node);
            graph.delete(node);

            for (const dependencies of graph.values()) {
                dependencies.delete(node);
            }
        }
    }

    return result.join('');
}

const triplets = [
    ['t', 's', 'f'],
    ['a', 's', 'u'],
    ['m', 't', 'h'],
    ['h', 'a', 'e'],
    ['r', 'm', 'f'],
    ['s', 'u', 'n'],
    ['n', 'f', 'e'],
    ['a', 'i', 's'],
    ['f', 'e', 't'],
    ['u', 'n', 'h'],
    ['m', 'f', 'e'],
    ['a', 't', 'h'],
    ['t', 'h', 'e']
];

console.log(recoverSecret(triplets)) //Output : "mathisunravel"