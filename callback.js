//  ---------------- CALLBACK FUNCTIONS ------------------
// Function passed as parameter for another function
// Passing function as parameter. Callback fun executes after execution of first function.
// Callback function is also called as HOF - Higher Order Function
// Async call can be handled well using callback func

function sum(a, b) {
    return a + b;
}
function getSumResult(result) {
    console.log('Result  for sum is ',result);
}
function calcualteSum(f, s, callbackFun,sendResult) {
    setTimeout(() => {  //suppose this is service call and we get some data after the service call and want to calculate sum for newly generated data
        let response = {
            firstValue: f + 2,
            secondValue: s + 2
        }
        sendResult(callbackFun(response.firstValue, response.secondValue));
    }, 1000);
}
calcualteSum(100, 300, sum, getSumResult);


// --------- Passing object as parameter may affect directly to main object -----------
var sample = {
    name: 'aaaa',
    id: 1
}
console.log('sample1',sample);

function newObjFun(myObj) { // non-primitve data is passed as an reference
    let count = myObj.id++;   //directly changes the main object i.e. sample object
    console.log(count);
}
newObjFun(sample);
console.log('sample2',sample);

