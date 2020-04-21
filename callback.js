//  ---------------- CALLBACK FUNCTIONS ------------------
// Function passed as parameter for another function
// Passing function as parameter. Callback fun executes after execution of first function.
// Callback function is also called as HOF - Higher Order Function
// Async call can be handled well using callback func
var resultttt;
function sum(a, b) {
    return a + b;
}
function substract(a, b,subsCallback) {
    return subsCallback(a - b);
}
function getSubstractionResult(result) {
    console.log('Result  for Substraction is - callback ', result);
    return result;
}
function getSumResult(result) {
    console.log('Result  for sum is - callback ', result, resultttt);
}

// _____________ Callback function ______________
function calcualteSumUsingCallback(f, s, callbackFun, sendResultCallBack) {
    console.log('entered');
    setTimeout(() => {  //suppose this is service call and we get some data after the service call and want to calculate sum for newly generated data
        let response = {
            firstValue: f + 2,
            secondValue: s + 2
        }
        resultttt = callbackFun(response.firstValue, response.secondValue);  // Callback function for Sum
        sendResultCallBack(resultttt);
        // OR
        // sendResultCallBack(callbackFun(response.firstValue, response.secondValue));    //used to avoid excessive variable    
        
        let subRsult = substract(f,s,getSubstractionResult);
        console.log("subRsult",subRsult);
    }, 1000);
}
calcualteSumUsingCallback(100, 300, sum, getSumResult);
console.log('Result  for sum is - callback222 ', resultttt);  //result is undefined because of async call in calcuateSum



// ___________HOF - Higher Order Function_____________

function calcualteSumUsingHOF(callbackFun){  // HOF - Higher Order Function 
    return callbackFun;  
}
var Hof =  calcualteSumUsingHOF(sum);
console.log('Result calculated using HOf',Hof(100,40));

// --------- Passing object as parameter may affect directly to main object -----------
var sample = {
    name: 'aaaa',
    id: 1
}
console.log('sample1', sample);

function newObjFun(myObj) { // non-primitve data is passed as an reference
    let count = myObj.id++;   //directly changes the main object i.e. sample object
    console.log(count);
}
newObjFun(sample);
console.log('sample2', sample);

