// let num = 5;
// console.log("multiplication table of ", num);
// for (let i = 1; i <= 10; i++) {
//     console.log(num + "x" + i + "=" + num * i);
// }

// let num = 5;
// let i = 0;
// while (i <= 10) {
//     console.log(i + "x" + num + "=" + i * num);
//     i++;
// }

// let num = 5;
// let i = 1;
// while (i <= 10) {
//     console.log(i + "x" + num + "=" + i * num);
//     i++;
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "x" + j + "=" + i * j);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     for (let n = 1; n <= 10; n++) {
//         console.log(i + "x" + n + "=" + i * n);
//     }
// }

// let n = 1;
// let i = 1;
// while (n <= 10) {
//     while (i <= 10) {
//         console.log(n + "x" + i + "=" + n * i);
//         i++;
//     }

//     n++;
// }

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}
