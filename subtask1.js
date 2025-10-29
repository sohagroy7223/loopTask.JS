let sum = 1;
for (let i = 81; i <= 131; i++) {
    // console.log(i);
    if (i % 2 === 1) {
        console.log("odd", i);
    }
    sum = sum + i;
    console.log(" the odd numbers from 81 to 131 is", sum);
}
