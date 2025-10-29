// Countdown from 21 to 15
let count = 21;

let timer = setInterval(() => {
    console.log(count);
    count--;

    // Stop when it reaches 15
    if (count < 15) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000); // 1000ms = 1 second
