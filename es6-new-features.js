// __________ ES6 NEW FEATURES _____________
/*
    1. Variable declaration with let and const
    2. IIFE'S
    3. Strings
    4. Arrow Function
    5. Destructuring
    6. Arrays
    7. Spread Opertor
    8. Rest Parameter
    9. Default Parameter
    10. Maps
    11. Classes and Sub-classes
*/

//-1) __________Variable declaration with let and const _________

// Using VAR keyword - Global scoping
function exUsingVar(params) {
    var val = 0;
    if (params) {
        var val = 1;
        if (val === 1) {
            var val = 1000;
        }
    }
    console.log('Value using VAR-->', val);  //1000
}
exUsingVar(true);

// Using LET keyword - Block level scoping
function exUsingLet(params) {
    let val = 0;
    if (params) {
        let val = 1;
        {
            let val = 1000;
        }
    }
    console.log('Value using LET-->', val); //0
}
exUsingLet(true);


//-2) __________ IIFE _________

(() => {

})();

// 
(function data() {

})();


//-3) __________ Strings _________
// in es5
var firstName = 'Omkar';
var lastName = 'Jadhav';
console.log(firstName + ' ' + lastName);

// in es6
console.log(`${firstName} ${lastName}`);


//-4) __________ Arrow Function _________
// in es5
// function (param1, param2) {

// }
// in es6
// (param1, param2) => {
//     let a = 10;
//     () => {
//         console.log(this.a);
//     }
// }

let obb = {
    data: 10,
    arr: [1, 2, 3],
    val: function () { //es5
        console.log('val-', this.data, this); //10
    },
    anony: () => console.log('anony', this.data, this),//es6-undefined,
    cal5:
        function () {
            let a = 10;
            console.log(this);//local
            function abc(ele) {
                console.log(this);//global
                function aaa(params) {
                    console.log(this, a);//global                    
                }
                aaa()
                // return `value is- ${ele} and data is ${this.data}` //undefined
            }
            abc()
        },
    cal6:
        function () {
            console.log(this);
            return this.arr.map(ele => `value is- ${ele} and data is ${this.data}`) //10
        },
}

obb.val();  //10
obb.anony();  //undefined
console.log(obb.cal5());  //undefined
console.log(obb.cal6());  //10

// Calling a function without a leading parent object will generally get you
// the global object which in most browsers means the window object.
// __________________________
let samp = {
    ad: 221,
    val: function bbb() {
        let a = 11;
        let aassdd = {
            vv: function ccc() {
                console.log('2', this);
                function ddd() {
                    console.log('3', this);
                }
                ddd()
            }
        }
        aassdd.vv()
    }
}
samp.val()


//-5) __________ Destructuring _________ 
// Destructuring means copying values from source element to new variable


// --- Destructuring with Array ---
var person = ['omkar', 25];  // es5
var studentDB = [{ roll: 'RN21', stud: 'Stud1' }, { roll: 'RN22', stud: 'Stud2' }];  // es5
const [name, age] = ['omkar', 25, true]; // es6
const [ele1, ele2] = studentDB; // es6
const { roll: rollNumber, stud: student } = ele1; // es6
console.log(name, age, rollNumber, student, ele1, ele2);


// --- Destructuring with Object ---
var data = { lastNamee: 'jadhav', firstNamee: 'omkar' };
const { firstNamee: first, lastNamee: last } = data;  //key changing
// OR
const { firstNamee, lastNamee } = data;
console.log(first, last, firstNamee, lastNamee);


// ---- Example ----
function serviceCall() {
    let response = { page: 0, size: 10, result: [1, 2, 4] }
    return response;
}
let { page, size, result: reponseData } = serviceCall();
console.log('service Called', page, size, reponseData);


// 6) --- Arrays ---
// Added new methods in es6 - find and findIndex
var myString = [{ id: 1, name: 'scss' }, { id: 2, name: 'sass' }];
var cond = (ele) => ele.name === 'scss';
console.log(myString.find(cond));
console.log(myString.findIndex(cond));


// 7) ------ Spread Opertor --------
// - Used for array and object. To copy/expand/concat array/object into new array/object.
// - To spread the object/array, we can have same datatypes for both the variables(left and right side shuold have same datatype)
// - Possible for different datatype also, but it can change your left side variable into right 
// side datatype.
// - Spread opearator is used to spread values in function call.
// - It is used in function call

let array1 = [1, 2, 4, 5, 6];
let array2 = [10, 11, 12];
let sampleObj1 = { id: 22, name: 'asdsd' };
let sampleObj2 = { id: 22, name: 'asdsd' };

let cpyArray1 = [...array1];
let cpyObj1 = { ...sampleObj1 };
console.log(cpyArray1, cpyObj1);

// To avoid reference push problem we use spread operator
array1 = array2;  // VVVVIMP
array1.push('new push');
console.log('Reference push', array1, array2);

// Avoid using spread - Copy data from array/obj using spread
array1 = [...array2];  //creates new array and copy values from array2
array1.push('pusheddd');
console.log('Spread operator', array1, array2);

// Same for object
array1 = { ...sampleObj1 }
// This cannot be worked in typescript
console.log('Changed type for array1-->', array1, sampleObj1);

// Spreading values in function call using array
let valuesToAdd = [11, 22, 33];

function sum(a, b, c, d) {
    console.log('Sum is-->', a + b + c + d);
    return a + b + c + d;
}
sum(...valuesToAdd, 44);  // Correct way
sum([...valuesToAdd], 44);  // Wrong way


// Spreading values in function call using object
let samplObj = { q: 2, e: 3 };
function add(a, b) {
    return a + b;
}
let addition = add(...Object.values(samplObj));
console.log('addition', addition);


// Concat two array/obj using spread 
let conc1 = ['a', 'b', 'c', 'd'];
let conc2 = ['e', 'f'];
let concatedArray = [...conc1, ...conc2];
console.log(concatedArray);

// Expand array/obj using spread 
let exp = [1, 2];
let normalPrint = [exp, 3, 4, 5];
let expanded = [...exp, 3, 4, 5];
console.log('normalPrint,expanded', normalPrint, expanded);


// 8) ------ Rest Parameter --------
/*  
- It is opposite to spread operator.
- It accepts couple of values and turns it into an array.
- It is used in function declaration
*/
function subsctrsact(a, b, ...params) { //this is rest params
    console.log(a, b, params); //returns an array of params in es6
    console.log(arguments); //returns an array of params in es5
}
let value = [1, 3];
// subsctrsact(...value, 3, 4, 5);  //Scenario-1
subsctrsact(3, 4, 5, ...value); //Scenario-2




// 9) ------ Default Parameter  --------
// We can set default values to the function parameter if value is not available/null/undefined

function sumWithZero(a, b, c = 0) {
    console.log('Sum Zero -->', a + b + c);
    return a + b + c;
}
sumWithZero(10, 20, 40);

// _________________

function Person(name, age, dob = 1994) {
    // dob === undefined ? dob = 1994 : dob = dob;
    console.log('Sum Zero -->', name, age, dob);
}
Person('Omkar', 25, 1992);


