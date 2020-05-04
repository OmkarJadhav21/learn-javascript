//  ---------------- ASYNC/AWAIT ------------------
// Async - Can be used in front of function name and return new  promise
/* Await - It is used ONLY inside the function to whom async keyword is attached. 
It waits to return value and holds the below execution inside async function untill it has value.
Returns the fulfilled value of the promise, or the value itself if it's not a Promise. */

// ----------- async keyword ------------
async function sum(a, b) {
    return a + b;
}
sum(10, 20).then(res => {
    console.log(res);
})
// If we store call of sum function in variable then, it returs new promise which is in pending state.


// ------------ async + await keyword -------
function getLengthAfter2Seconds() {
    let arr = [{ id: 1 }, { id: 1 }, { id: 1 }];
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(arr.length);
            resolve(arr.length);
        }, 2000);
    })
}
function getLengthAfter1Seconds() {
    let arr = [{ id: 1 }];
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(arr.length);
            resolve(arr.length);
        }, 1000);
    })
}
function getRejectedPromise() {
    throw new Error('Error occured');
}
async function calculateLength() {
    getLengthAfter2Seconds();  //synchronously called
    getLengthAfter1Seconds() //synchronously called

    let length = await getLengthAfter2Seconds(); //Asynchronous - wait for result
    console.log('called Asynchronously.....wait for length variable value', 2 + 555);
    let length2 = await getLengthAfter1Seconds();  //Asynchronous - wait for result
    try {
        await getRejectedPromise();
    } catch (e) {
        console.log(e);
    }
    console.log('Array length is', length, length2);
} //total execution time for this function is 3 seconds

calculateLength();  //synchronously called
console.log('called synchronously.....', 2 + 555);  //synchronously called
getLengthAfter2Seconds();  //synchronously called
getLengthAfter1Seconds();  //synchronously called



// +++++++++++++++++++++++++++++ EXAMPLE Using ++++++++++++
// Callback Function
// Async/await
// Promise
// try/catch

var count = 0;
var productArray = [];

function findEvenOdd(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}
function checkForEvenOdd(num, callbackFun) {
    return callbackFun(num);
}
function addProductInList(product) {
    return new Promise(resolve => {
        setTimeout(() => {
            productArray.push(product);
            let list = document.getElementById('productList');
            list.innerHTML += `<li>${product.id} - ${product.product}</li>`;
            resolve(productArray.length);
        }, 1000);
    })
}

async function addProduct() {
    let btnEle = document.getElementById('addProduct');
    btnEle.setAttribute('disabled', true);
    let rawObj = {
        id: ++count,
        product: `Product-${count}`
    }
    try {
        if (productArray.length < 5) {
            let size = await addProductInList(rawObj);
            let isSizeEvenOrOdd = checkForEvenOdd(size, findEvenOdd);
            btnEle.disabled = false;
            alert('Product added successfully');
            console.log(size, isSizeEvenOrOdd);
        } else {
            throw new Error('Cannot add more than 5 products');
        }
    } catch (error) {
        alert(error.message);
    }
}
