//  ---------------- CURRYING ------------------
// Currying - is the process of taking function with multiple parameters and returning a serires of 
// function that takes one argument as parameter and resolve the value
// that is - function myFun(a,b,c) ===> tranformed to==> myFun(a)(b)(c)



function sum(a,b,c) {
    let result = a+b+c;
    console.log('Curried a+b+c result',result);
    return result;
}
sum(12,23,4);

// Manual process of currying
function curriedSum(originalSumFunc) {
   return function accceptA(a) {
      return  function acceptB(b) {
           return function acceptC(c) {
                originalSumFunc(a,b,c)
            }
        }
    }
}

 let returned3Functions  = curriedSum(sum);
 console.log(returned3Functions);
 returned3Functions(10)(20)(30);