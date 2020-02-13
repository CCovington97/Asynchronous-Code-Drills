// Timing Out Parts 1-3
// function stringMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// };

// stringMessage('some string message');
// stringMessage('some different string message', 2000);

// Timing Out Part 4
// let getWords = () => {
//     console.log('instant')

//     setTimeout(() => {
//         console.log('3') // after 3 seconds, logs 3
//         setTimeout(() => {
//             console.log('2') // after an additional 2 seconds, logs 2
//             setTimeout(() => {
//                 console.log('1') // after an additional second, logs 1. this all occurs after 6 seconds total.
//             }, 1000);
//         }, 2000);
//     }, 3000);
// }

// getWords()

// Callbacks and Recursion Part 1
let done = () => console.log("Job's done!");
// Callbacks and Recursion Part 2 & 3
let countdown = (num, callback) => {
    if (num > 0) {
        console.log(num)
        setTimeout(() => {
            countdown(num-1, callback);
        }, 1000);
    } else {
        callback();
    }
}
countdown(3, done); // after 3 seconds, it will log "Job's done!" to the console

// Promises Part 1
let lunchTime = false
const orderMeSomeFood = (lunchTime) => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let lunchObj = {
                lunch: 'sandwich',
                drink: 'dr. pepper'
            };
            resolve(lunchObj);
        } else {
            let error = new Error('booooo');
            reject(error);
        };
    });
};

orderMeSomeFood(lunchTime)
    .then(res => console.log(res))
    .catch(err => console.log(err));