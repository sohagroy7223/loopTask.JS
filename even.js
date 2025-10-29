let num = 1;
while (num < 10) {
    console.log(num);
    if (num % 2 === 0) {
        console.log("even number", num);
    }
    num++;
}
let sum = 0;
for (let n = 206; n < 311; n++) {
    sum = sum + n;
    console.log(n);
}
console.log("total even numbers 206 to 311 is", sum);
