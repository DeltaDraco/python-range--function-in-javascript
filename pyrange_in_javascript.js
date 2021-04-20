/* range function declaration */
function* range(start, stop = start, step = 1) {
    for (let i = (stop === start ? 0 : start); (stop > 0 ? i < stop : i > stop); i += step) {
        yield i;
    }
}

/* usage examples */
console.log("A single positive integer");
for (const i of range(6)) {
    console.log(i); // 0 1 2 3 4 5
}

console.log("\n2 positive integer arguments: starts at x and stops at y");
for (const i of range(1, 4)) {
    console.log(i); // 1 2 3
}

console.log("\n3 arguments, starting from x, stops at y, and increments by z");
for (const i of range(-10, 11, 10)) {
    console.log(i); //-10 0 10
}

console.log("\nWorks with negative decrements too");
for (const i of range(4, -8, -2)) {
    console.log(i); //4 2 0 -2 -4 -6
}
