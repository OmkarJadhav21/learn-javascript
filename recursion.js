//  ---------------- RECURSION / RECURSIVE FUNCTIONS ------------------
// IT IS A FUNCTION WHICH CALLS ITSELF UNTIL THE BREAKPOINT/STOPPING CONDITION OCCURES.
// RECURSIVE FUNCTION ALWAYS HAVE A STOPPING CONDITION OTHERWISE IT WILL CALL THAT FUNCTION INFINITELY.


// Stopwatch example
function stopWatch(time) {
    console.log('time', time);
    let reducedTime = time - 1;
    setTimeout(() => {
        if (reducedTime > 0) {  //Stopping condition
            stopWatch(reducedTime);
        } else {
            alert('Timeout');
        }
    }, 1000);

}
// stopWatch(10);




// Power of x ===x^n-----> eg - 2^4 = 2x2x2x2 = 16 ;; 4^3 = 4x4x4 = 64
function power(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * power(x, n - 1);  //Logic for power
    }
}
console.log('RESULT', power(2, 4), power(4, 3));


// 2,4  - 2 x power(2,3) - 2x (2x (2x2))
// 2,3  - 2 x power(2,2) - 2x (2x2)
// 2,2  - 2 x power(2,1) - 2x 2


// (10 - (1 + (2 + (3 - 2))))    //Solving internal grouping first .(We can't solve from outer to inner grouping) 
// 10-1+2+1
// 6


// Fibonacci series - eg - 1,1,2,3,5,8,13,21,34 -Hw-done
