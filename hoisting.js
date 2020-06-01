// Hoisting - We can use all the variables, functions before its declaration.
// ___________________________________________
// 1)  Hoisting variables
//  Only the varibales which are declared using 'var' keyword are hoisted also the varibles which are initialized/assigned are not hoisted
// ___________________________________________


// var sirName = 'Jadhav' //initialization
// name='omkar'; //assignemnt
// var name;  //declared
// x=3;
// abc = true;
// var abc,x;

// // Not hoisted-- 1.initialized/assigned, 2.let keyword and 3.const keyword
// var sirName = 'Jadhav';
// let pqr;
// const pie =3.14;

// // HOW JS CONVERTS / HOIST VARIABLES

// var sirName= 'Jadhav';
// var name;
// var abc;
// var x;

// name='Omkar';
// x=3;
// abc=true;

// ____Using var keyword___ ---> Hoisting applicable
/* name='Omkar';
console.log('name is ',name);
var name; */
// _________________________

// ____Using let keyword___ -->Gives Cannot access 'name' before initialization error
// name='Omkar';
// console.log('name is ',name);
// let name;

// pie =3.14;  //Missing initializer in const declaration-error
// console.log(pie);
// const pie;

// console.log(pie); // Cannot access 'pie' before initialization- error
// const pie = 3.14;

// var confuse;
// console.log(confuse);  // undefined
// confuse = 10;

// console.log(confuse);  // undefined
// confuse = 10;
// var confuse;

// var confuse;
// confuse = 10;
// console.log(confuse);  // 10

// confuse = 10;
// var confuse;
// console.log(confuse);  // 10

// confuse = 10;
// console.log(confuse);  // 10
// var confuse;



// ___________________________________________
// 2)  Hoisting Functions
// ___________________________________________

addValues(12,234);   // - Hoisting applicable
function addValues(a,b) {
    console.log('Sum is ',a+b);
}
addValues(12,234);


// Function set to variable - Hoisting is not applicable
console.log(addMe(100,200));

// susbstract(100,200);   // Not work
var susbstract = function(a,b) {
    console.log('Substraction is -->',b-a);
}
susbstract(100,200);  // Works fine

// makeSum(12,122);   //  makeSum is not a function.
// addMe(12,222);   // ReferenceError: addMe is not defined - because Add me is assigned to makeSum hence makeSum overided by addMe



// ___________ Difference between Var, Let, Const _____________
// VAR  - Can access outside the scope;
// LET  - Cannot access outside of the scope;
// CONST  - Cannot access outside of the scope;

// _____VAR_______ 
// console.log('1>>',data);
// if (true) {
//     console.log('2>>',data);
//     var data="ENCERPT"   
//     console.log('3>>',data);
// }
// console.log('4>>',data);

//  _____LET_______ 
// console.log('1>>',data);  //  data is not defined
// if (true) {
//     // console.log('2>>',data);  // Cannot access 'data' before initialization
//     let data="ENCERPT"
//     console.log('3>>',data);
// }
// console.log('4>>',data);

//  _____CONST_______
console.log('1>>',data);  //  data is not defined
if (true) {
    console.log('2>>',data);  // Cannot access 'data' before initialization
    const data="ENCERPT"
    console.log('3>>',data);
}
console.log('4>>',data);  //data is not defined
