//  ----------------PROMISES ------------------
// IT IS USED TO HANDLE THE ASYNC OPEARATIONS IN JS - 
// ASYNC -> WHEN 2 PROGRAMS ARE RUNNING CONCURENTLY AND ONE IS DEPENDS ON OTHER, 
// AT THAT IT STOPS THE EXECUTION UNTIL THE FIRS ONE IS RESOLVED/COMPLETED AND STARTS THE OTHER EXECUTION
// CODE AFTER RESOLVED/REJECT IS NOT EXECUTED/IGNORED


// ***** Creation ******
let promise1 = new Promise((resolve, reject) => { } //1
    // resolve = If job finished successfully
    // reject = If error occured
);
console.log(promise1);
// -Values in promises---

/* 
1) By default when promise is created then 
    1- promiseStatus ="pending"
    2- promiseValue = undefined

2) When promise is resolved then - 
    1- promiseStatus ="resolved"
    2- promiseValue = "your value"

 3) When promise is reject then - 
     1- promiseStatus ="reject"
    2- promiseValue = "your value"
*/





//Fibonacci Series in prmoises
function calcualte(n) {
    return new Promise((resolve, rej) => {
        if (n === 1) {
            resolve([0, 1]);
        } else {
            let result = calcualte(n - 1);
            result.then((success, err) => {
                success.push(success[success.length - 1] + success[success.length - 2]);
            });
            resolve(result);
        }
    })

}

calcualte(8).then(res => { // .then - used to handle success after promise completion
    var result = res;
    // console.log('Final Fibonacci series', res)
}).catch(error => {  //.catch - Used to handle only errors
    // console.log(error);
})






// Basic example
let promo = new Promise((reso, rej) => {
    setTimeout(() => {
        reso("All done,,,")
    }, 260);
});
// console.log(promo);  //prints a promise
promo.then((successPromise, rejectedPromoise) => { //.then - is used to get value from promise
    // console.log(successPromise);
})







// Example with diverse situations

"use strict";

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 0; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
    try {
        setTimeout(
            function () {
                const randomInt = Date.now();
                const value = randomInt % 10;
                try {
                    if (value >= THRESHOLD_A) {
                        throw new Error(`Too large: ${value}`);
                    }
                } catch (msg) {
                    reject(`Error in callback ${msg}`);
                }
                resolve(value); //4
                return;
            }, 500);
        // To experiment with error at set-up, uncomment the following 'throw'.
        // throw new Error("Bad setup");
    } catch (err) {
        reject(`Error during setup: ${err}`);
    }
    return;
}

function determineParity(value) { //4
    const isOdd = value % 2 ? true : false;
    const parityInfo = { theNumber: value, isOdd: isOdd }; // { theNumber : 4, isOdd : true }
    return parityInfo;
}

function troubleWithGetNumber(reason) {
    console.error(`Trouble getting number: ${reason}`);
    throw -999; // must "throw" something, to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
    // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
    var tetheredGetWord = function (resolve, reject) {
        const theNumber = parityInfo.theNumber; //4
        const threshold_B = THRESHOLD_A - 1;  // 8-1 =7
        if (theNumber >= threshold_B) {  //4>=7
            reject(`Still too large: ${theNumber}`);
        } else {
            parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
            resolve(parityInfo);  //3keys - theNumber,isOdd,wordEvenOdd
        }
        return;
    }
    return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))//4
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
        // console.log("Got: ", info.theNumber, " , ", info.wordEvenOdd);
    })
    .catch((reason) => {  // .catch = Only used for error handling
        if (reason === -999) {
            console.error("Had previously handled error");
        }
        else {
            console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
        return 'donnnneee'
    })
    .finally((info) => {
        // console.log("All done")
    });  // .finally used when all the promise is settled






//Advanced Example

'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The executor function is called with the ability to resolve or
        // reject the promise
        (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function () {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
    p1.then(function (val) {
        log.insertAdjacentHTML('beforeend', val +
            ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
    }).catch(
        // Log the rejection reason
        (reason) => {
            // console.log('Handle rejected promise (' + reason + ') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}

testPromise();







// **** METHODS ***** 

// Promise.resolve()  - return new resolved promise.
let prom = Promise.resolve([1, 23]);

// Promise.reject()  - return new rejected promise.
let rej = Promise.reject(new Error('we accept only oject'));

// Promise.race()  - return faster executed promise
let pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res({ message: 'promise 1 resolved late' });
    }, 2000);
});

let pro2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej(new Error({ messge: 'promise 2 resolved faster' }));
    }, 500);
})
let fasterExecutedPromise = Promise.race([pro1, pro2]);
fasterExecutedPromise.then(faster => console.log(faster));

/* Promise.all() - This method accepts promise/non-promise.resolved promise. only the method returns a single Promise that fulfills when 
 all of the promises passed as an iterable have been fulfilled or when the iterable contains no promises or when the iterable 
 contains promises that have been fulfilled and non-promises that have been returned. */
let waitForAllDone = Promise.all([pro1, pro2]);
waitForAllDone.then(done => console.log(done));

// Promise.allSettled() - Will accepts only promises and returns the new promise when all the promises have either resolved or rejected.
let suceesOrError = Promise.allSettled([pro1, pro2])
suceesOrError.then(res => console.log(res));