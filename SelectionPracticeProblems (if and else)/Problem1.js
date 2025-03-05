let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 100);
}

console.log(numbers);
console.log("Min:", Math.min(...numbers));
console.log("Max:", Math.max(...numbers));