// for loop continue****

// for (let i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i % 2 === 0) {
//         continue;
//     }
// }

// while loop continue*****

let n = 0;
while (n < 15) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}
