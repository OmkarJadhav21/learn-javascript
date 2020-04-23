//  ---------------- MEMOIZATION ------------------
// It is a technique which is used to increase the function performance by caching it's previous result.
// If same input occurs again for the function then it sends the prevoiusly calcualted result from the cached result.


function processData() {
    let cachedResult = {};  // Main object which stores cached result;
    console.log('ProceDATA function called...');
    return (numb) => {
        if (numb in cachedResult) {
            console.log('Fetching result from cache....', cachedResult);
            return cachedResult[numb];  //return stored result from main cached obj
        } else {
            let result = numb * 2;  //processing on data
            cachedResult[numb] = result;  //storing value in main cached obj
            console.log('Calcualted result manually.....', cachedResult);
            return result;
        }
    }
};
let multiplyBy2 = processData();
multiplyBy2(100);
multiplyBy2(30);
multiplyBy2(100);


// FACTORIAL-----  4! =  4x3x2x1 = 24;

function factorial(n) {
    console.log('factorial called......');
    
    let cachedResult = {};
    if (n <= 0) {
        return 1;
    }
    if (n in cachedResult) {
        return cachedResult[n];
    } else {
        console.log(n);
        let result = n * factorial(n - 1);  //calcualting factorial
        // 4x(3x(2x(1x(1))))
        cachedResult[n] = result;
        console.log(result, cachedResult);
        return result;
    }
}

// let finalResult = factorial(4);
// console.log(finalResult);


// __________________ Calcualte factorial from already cached result _______________

function calculateFactorial() {
    let cachedResult = {};
    return function factorial(n) {
        if (n <= 0) {
            return 1;
        }
        if (n in cachedResult) {
            console.log('Factorial returned from Cache......');
            return cachedResult[n];
        } else {
            console.log('Factorial manually calualted......');
            let result = n * factorial(n - 1);  //calcualting factorial
            // 5x(24)
            cachedResult[n] = result;
            console.log(result, cachedResult);
            return result;
        }
    }
}

let fact = calculateFactorial();
console.log('finalRes',fact(4),fact(5));  
// Here fact(4) will calculate first and then fact(5), and hence factorial 5 will get already calcualted 
// value of factorial 4 and final result will be the multiplication of -
// 5 x fact(5-1) 
// = 5 x fact(4) 
// = 5 X 24
// = 120 === 5!

