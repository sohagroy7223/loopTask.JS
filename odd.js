// let num = 60;
// while (num <= 100) {
//     console.log(num);
//     if (num % 2 === 1) {
//         console.log("number is odd", num);
//     }

//     num++;
// }
let sum = 0;
for (let i = 81; i <= 131; i++) {
    if (i % 2 === 1) {
        console.log(i);
        sum += i;
    }
}
console.log(sum);

// // let sum = 0;

// // for (let i = 81; i <= 131; i++) {
// //     if (i % 2 === 1) {
// //         // check if the number is odd
// //         sum += i;
// //     }
// // }

// console.log("Sum of all odd numbers from 81 to 131 is:", sum);
