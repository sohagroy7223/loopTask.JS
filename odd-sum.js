// let sum = 0;
// let num = 10;

// while (num <= 20) {
//     // console.log(num);
//     if (num % 2 === 1) {
//         console.log("odd number is:", num);
//         sum = sum + num;
//     }

//     num++;
// }
// console.log("the ans is 10 to 20 is:", sum);
let sum = 0;
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
        sum = sum + i;
    }
    // console.log(i);
}
console.log("odd sum:", sum);
