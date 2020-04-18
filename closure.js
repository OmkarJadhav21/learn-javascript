//  ---------------- CLOSURE ------------------
// CLOSURE IS NOTHING BUT THE INNER FUNCTION, THAT HAS AN ACCESS TO THE OUTER FUNCTION'S VARIABLES AND PARAMETERS

var glob = 'global';
// function outer(params) {
//     var a = 210;
//     function inner() {
//         var b =23;
//         console.log(a,b,glob,params);
//     }
//     inner();
// }
// outer(120);


function outer(params) {
    var a = 210;
    return function inner() {
        var b =23;
        console.log(a,b,glob,params);
    }
}
let getFunc =  outer(50);  // outer function returns a inner function
getFunc();  //then call your returned inner function with function call ();



function calcualteRetirement(retirementAge) {

   return function retirementForPerson(birthYear) {

        console.log(`You have ${retirementAge -(2020-birthYear)} years left for retirement`);
        return `WE will return after ${retirementAge -(2020-birthYear)} years`;
    }
}
let retirementPeriod  = calcualteRetirement(66);
var message = retirementPeriod(1994);
            // OR
// calcualteRetirement(66)(1994);
console.log('message--->',message);