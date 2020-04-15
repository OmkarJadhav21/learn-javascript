// __________ JAVASCRIPT EXECUTION AND PARSER _____________
// var toll; =  var toll = undefined;

var toll;  //Global
function abc() {
    var toll = 5;
    console.log('Functional scope toll', toll);

    function pqr() {
        console.log('nested function');
    }
}
console.log('Global toll1', toll);

// Global scope  - Globally declared var and obj are always pointed to the global 'window' object   
// window.toll = Global scope
// window.abc = Global scope

// window.abc.toll = functional scope
// window.abc.pqr = functional scope


// ___________NORMAL SCOPING ___________

// var a = 10;
// function first() {
//     console.log('a is ', a);
//     var b = 20;

//     second();
//     function second() {
//         var c = 30;
//         console.log('a , b and c', a, b, c);    
//     }

//     console.log(a,b);
// }
// console.log(a);
// first();

// ___________LEXICAL SCOPING ___________
// This keyword - This always points to the Global window object
var a = 10;
function first() {
    var b= 20;
    second();

    function second() {
        var c =30;
        third();   //lexical
        console.log(a,b,c);
        console.log('Second fun this',this);
    }
    console.log(a,b);
    console.log('First fun this',this);
}

function third() {
    var d = 40;
    console.log(a,d);
}
first();

//----------------- IIFE - Immediately Invoked Function Expression ----------------
// To hide data/function in program ----> cannot call/access function,variable etc outside of the scope
third();  //normal

// 1 way
(function duplicate() {
    console.log('FOURTH CALLED....');  //IIFE - here function inside parenthesis is treated as expression
})();

// 2 way
(function () {
    console.log('ANONYMOUS CALLED....');  //IIFE - here function inside parenthesis is treated as expression
})();

// 3 way
(()=> {
    console.log('ANONYMOUS ARROW FUNC CALLED....');  //IIFE - here function inside parenthesis is treated as expression    
})();

// NESTED IIFE-------------
(()=>{
    console.log('INSIDE FIRST IIFE....');
    (()=>{
        console.log('INSIDE SECOND IIFE....');
    })();
})();


// Calling normal function and variables inside nested IIFE
var f ='one';
(()=>{
    console.log('INSIDE FIRST IIFE....');
    (()=>{
        var i='second'
        console.log('INSIDE SECOND IIFE....',f,i);
        third();
    })();
})();

// NESTED IIFE sum-------------
((a,b)=>{
    console.log('INSIDE FIRST IIFE....SUM IS--',a+b);
    ((myStr)=>{
        console.log(`INSIDE SECOND IIFE....${myStr.toUpperCase()} IS--${a+b}`);
    })('Summesion');
})(2,5);
