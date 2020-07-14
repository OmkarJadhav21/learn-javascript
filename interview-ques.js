var input = ['eat', 'tea', 'ate', 'tan', 'nat', 'bat'];;

var output = [];
for (let i = 0; i < input.length - 1; i++) {
    let first = input[i].split('').sort().toString();
    let baseArray = [input[i]];
    for (let j = i + 1; j < input.length - 1; j++) {
        second = input[j].split('').sort().toString();;
        if (first === second) {
            baseArray.push(input[j]);
        }
    }
    if (baseArray.length > 1) {
        output.push(baseArray)
    }
}
console.log('out - "Anagram" in one array', output);

// |||||||||||||||||||||||||||||||||||||||||||||||| //

function incrementByOne(val) {
    let value = val;
    return function () {
        return value++
    }
}
let retFun = incrementByOne(0)
console.log(retFun());
console.log(retFun());
console.log(retFun());
console.log(retFun());

// |||||||||||||||||||||||||||||||||||||||||||||||| //

let array = [12, 3, 23, 4, 2];
let a = 10;
for (let a = 0; a < array.length; a++) {

}
console.log('What is a', a);

// |||||||||||||||||||||||||||||||||||||||||||||||| //

let b = 1;
for (b = 1; b < array.length; b++) {

}
console.log('What is b', b);

// |||||||||||||||||||||||||||||||||||||||||||||||| //

let c = 1;
for (c = 1; c < array.length; c++) {
    setTimeout(() => {
        console.log('What is cinside', c);
    }, c * 100);
}
console.log('What is c', c);

// |||||||||||||||||||||||||||||||||||||||||||||||| //

for (let d = 0; d < array.length; d++) {
    setTimeout(() => {
        console.log('What is dinside post', d++);
        console.log('What is dinside pre', ++d);
    }, d * 100);
}

// |||||||||||||||||||||||||||||||||||||||||||||||| //

var e = 10;
function test() {
    console.log('E first', e);
    if (!e) {
        var e = 25;
        console.log('E second', e);
        console.log('E from this', this.e);
    } else {
        e = 15;
        console.log('E third', e);
    }
}
e = 20;
test();
console.log('E fourth', e);

// |||||||||||||||||||||||||||||||||||||||||||||||| //

let f = 12;
// f = 0110  --> after right shift 1 = 0011
console.log('F after right shift with 1 is->', f >> 1);//3  rightShift operator
console.log('F after right shift with 1 is->', f >>> 1);  //append zero while shift = unsigned opeartor
/* In simple words '>>>' always shifts a zero into the leftmost position 
whereas '>>' shifts based on sign of the number i.e. 
1 for negative number and 0 for positive number.
 */

// |||||||||||||||||||||||||||||||||||||||||||||||| //

function a1() {
    console.log('this out- is global', this);
    (() => {
        let myobj = {
            name: 'om',
            lastName: 'jadhav',
            fullName: () => {
                console.log('-------->>>>This returns global', this);
                return this.name + this.lastName;
            },
            fullNameWithFuncDeclar: function () {
                console.log('------->>>>This returns current obj', this);
                return this.name + this.lastName;
            }
        }
        console.log('this.for anonymous function', myobj.fullName());
        console.log('this for.fullname with function keyword', myobj.fullNameWithFuncDeclar());
        console.log('this in-global', this);
    })();
}
a1();

// |||||||||||||||||||||||||||||||||||||||||||||||| //

var empList = [{
    name: 'Molly',
    dept: 'IT',
    YOJ: 2011
}, {
    name: 'Andrew',
    dept: 'Account',
    YOJ: 2019
}, {
    name: 'Nicole',
    dept: 'Sales',
    YOJ: 2014
},
{
    name: 'NicoSSle',
    dept: 'Sales',
    YOJ: 2014
}]

var result = [];
function groupBy(key) {
    for (let i = 0; i < empList.length; i++) {
        const mainEle = empList[i];
        result[i] = [];
        result[i].push(mainEle);
        for (let j = i + 1; j < empList.length; j++) {
            const innerEle = empList[j];
            if (mainEle[key] === innerEle[key]) {
                result[i].push(innerEle);
            }
        }
    }
}
groupBy('YOJ');
console.log('REsult', result);

// |||||||||||||||||||||||||||||||||||||||||||||||| //


// (Duration: 15 Mins)
// ----------------------------------------------------------------------
// 1. What will be the output of the code below?
//   var y = 1;
//   if (function fnn(){}) {
//     y += typeof fnn;
//   }
//   console.log(y);
//   => NaN x        1undefined

//  ----------------------------------------------------
//  2. Write a mul function which will invoked in the following manner:
//  console.log(mul(2)(3)(4)); 
// console.log(mul(1)(2)(3));
// var mul = (a) => (b) => (c) => a * b * c;

//  ----------------------------------------------------
//  3. Write down Four ways to empty the array below?
// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

//   =>
//   - arrayList=[];
//   - arrayList=new Array();
//   - arrayList.length=0;
//   - arrayList.splice(0, arrayList.length);
//   -  while (arrayList.length) {
//           arrayList.pop()
//       }
// console.log(arrayList);


//  ----------------------------------------------------
//  4. How do you check if an object is an array or not?
// var arrayList = [1, 2, 3];

//  =>
//  - typeof arrayList;  //object
// function checkType() {
//     if (arrayList && typeof arrayList.length === 'number') {
//         alert('its Array');
//     }
// }
// checkType();
//  ----------------------------------------------------
//  5. What will be the output of the following code?
//  var output = (function(x){
//     delete x;
//     return x;
//   })(0);
//   console.log(output);

//    => undefined X    0  
//  ----------------------------------------------------
//  6. 
// var Employee = {
//   company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// console.log(emp1);
// delete emp1.company
// console.log(emp1.company);

//     => undefined X    xyz

//  ----------------------------------------------------
//  7. What will be the output of the code below?
// var trees = ["xyz","xxxx","test","ryan","apple"];
// delete trees[3];
// console.log(trees.length);

//     => 5

//  ----------------------------------------------------
//  8. What will be the output of the code below?
// true = 1
// false = 0
// var bar = true;
// console.log(bar + 0);
// console.log(bar + "xyz"); //treat as strng
// console.log(bar + true);  //1+1
// console.log(bar + false); //1+0

//     =>
//     - 1
//     - truexyz
//     - 2
//     - 1

//  ----------------------------------------------------
//  9. What will be the output of the code below?
    // var foo = function bar() { return 12; };
    // console.log(typeof foo());
//     => function X    ReferenceError: bar is not defined

// ----------------------------------------------------
//  10. How to access below class outside of the module?

//       module Vehicle {
//             class Car {
//                 constructor (
//                     public make: string,
//                     public model: string) { }
//             }
//             var audiCar = new Car("Audi", "Q7");
//         }

//      var fordCar = Vehicle.Car("Ford", "Figo");

//   =>Using export keyword

// ----------------------------------------------------