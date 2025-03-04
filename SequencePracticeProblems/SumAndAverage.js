let sum = 0;
for (let i=0; i<5; i++) {
    let num = Math.floor((Math.random()+1) * 10);
    console.log("Random number: " + num);
    sum += num;
}

console.log("Sum of random numbers: " + sum);

let average = sum / 5;
console.log("Average of random numbers: " + average);