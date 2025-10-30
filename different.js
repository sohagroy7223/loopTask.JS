// odd --> system 1***

for (let n = 0; n <= 20; n++) {
    if (n % 2 === 1) {
        console.log(n);
    }
}

// odd --> system 2***

// for (let n = 0; n <= 20; n++) {
//     if (n % 2 !== 0) {
//         console.log(n);
//     }
// }

// odd --> system 3***

for (let n = 1; n <= 20; n += 2) {
    if (n % 2 === 1) {
        console.log(n);
    }
}
