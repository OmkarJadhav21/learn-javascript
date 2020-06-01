var name;   //declartion (default undefined)
name='omkar';  ///value assignent

var age = 'twenty';   //Initialization
age=25;

var isMarried = false;

//******  Type coercion
console.log(age +' is ' +name+' '+'years old and is married '+ isMarried);

//Variable  Mutation - When variable is declared and want to assign value to it then their is no need to redeclare it.


//*****   Basic operator-

//1)   +, - ,*, /  - Mathematical opearor
//2)   >,< <=,>=     - Logical operator
//3)   typof         - typof opeartor

var ope = 10,rat = 9,z;
console.log(ope<=rat);   //Logical

 z = ope + rat;
//  z = ope - rat;
//  z = ope * rat;
//  z = ope / rat;
console.log(z); //Mathematical

// typof operator 
console.log(typeof '');  //string
console.log(typeof 23);   //number
console.log(typeof '23');  // string
console.log(typeof 'true'); //string
console.log(typeof false);   //boolean
console.log(typeof null);  //object {}
console.log(typeof undefined);  //undefined


// ****  Opeator Precendence
var a,b,c;
a=100;
b=20;
c=45;

// ()  []
// *
// /
// +
// -

console.log(a-b>=c);
console.log(a*(b-c)- typeof(a+c));  
a*(b-c)  -2500
-2500-100
-2600+45
-2555

console.log(a*(b-c)- typeof(a+c));    //Nan = Not a number
console.log( typeof(a*(b-c)- typeof(a+c)));    // number
console.log(Number.isNaN(typeof(a*(b-c)- typeof(a+c))));  // false
console.log(Number.isNaN(a*(b-c)- typeof(a+c)));  //true

// ******* Multiple assignment
var p,q,r,w;
r=290;
p=q=w=(50-29);   //Assignement operator works from right to left
// 50-29 =21;
// w=21;
// q=w;
// p=q;
console.log(p,q,r,w);

// ****** other/more operator
var x = 10;

x=x+1;
x+=1;
x++;
// ___________
x=x+2;
x+=2;
// __________
x=x*1;
x*=1;
console.log(x);


// ********* If-else 
var f=true;
var t =10;

if (t=='10') { //t==10==10;   checks only value
    console.log('Success');
} else {
    console.log('Failure');    
}

if (t==='10') { //t==10==10;   checks value + data type
    conole.log('Success');
} else {
    console.log('Failure');    
}

if (t===10) {
    console.log('Success');
    console.log('Success');
}else
    console.log('Failure');    


if (f) { //f===true(wrong)  f(right)
    console.log('Success');
}else {
    console.log('Failure');    
}
// Ternary operator
f?console.log('Success'):console.log('Failure');
t===10?x=t:x=20;   // x=10/20

var confuse = 1457;
var myans = confuse === 145 ? 145 : confuse; //Single ternary
// Assignement operator works from right to left 
// confuse === 145 ? 145 : confuse;
// condition false
// myans =confuse
// confuse=1457
// myans = 1457;
console.log(myans);

var trusted = true;
var show = trusted?'trusted':'abc';


var mytext = 'edit';
// here edit and updated are same things
var btn = mytext==='edit'?'edit':'updated'?'edit':'Create'; //multiple ternary
var btn;
if (mytext==='edit') {
     btn='edit'
} else if (mytext==='updated') {
    btn='edit'
} else {
    btn='create' 
}

// ******* Switch case
switch (mytext) {
    case 'edit':
        btn='edit' 
    break;

    case 'updated':
        btn='edit' 
    break;

    default:
        btn='create' 
    break;
}


switch (mytext) {
    case 'edit':
    case 'updated':
        btn='edit' 
    break;
    
    default:
        btn='' 
    break;
}


// Primitive datatypes - string, number, boolean, undefined, null;   ---Pass by value;
        // A primitive value is a value that has no properties or methods.
// Non-primitive datatypes - object, Array, Functions   --pass by reference
var as = 12;
var ad;
ad =as;
as=345;
console.log(ad);  //pass by value

var originlArray = [10,2,4,5];
var changedArray = originlArray;
originlArray.push(2222)            
console.log(changedArray,originlArray);   //pass by reference


// Truthy and falsy values
// Falsy values - undefined,null,0 ,'',NaN
// Truthy values - values which are NOT falsy.

var height;

if (height) {
    console.log('Height is '+height +'Truthy value');
}else{
    console.log('Falsy value')
}


// Equality operator
// ===    - Checks type and value;   -Strict equality
// ==     - Checks value

// Functions statements and expressions
// expressions - 2+3 = 5 - piece of code which returns some value
// statements - if else - not expected to return any output


// Types of function declartion and execution

function work() {   //Declaration
    console.log('Work hard');
}
var workH = function(param1){
    console.log('Work workH '+param1);
}
var workHard = ()=>{
    console.log('Work workHard');
}
work();   //Execution
workH('abc');
workHard();

// Example
var name= 'kalyaniw';
var status = 'needToImprove';
var note = 'keepUp'

var grade = name==='kalyani' ? status:note==='keepUp'?4:2;
console.log("grade for "+name+ ' is ', grade);


