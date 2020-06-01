//_____________ Class ______________
// Class is also type of function but it doesn't have a function keyword, instead it have a class keyword.
// In es6 classes, we cannot use function or any other keyword inside the object scope, 
// but it can be used in blocked scope.
// extends ->>>class      implements->>interface
// Class is not an object — it is the blueprint of an object. Classes are special functions. 
// You can define functions using function expressions and declarations and you can define 
// classes that way as well. We can create the number of objects using the blueprint.
// https://medium.com/better-programming/object-oriented-programming-in-javascript-b3bda28d3e81



// es5 dont have a 'class' keyword hence it can be written in this way-
var Person = function (name, dob) {
    this.name = name;
    this.dob = dob;
}
Person.prototype.calcualteAge = function () {
    return 2020 - this.dob;
}
let omPerson = new Person('omkar', 1994);
console.log(omPerson, omPerson.calcualteAge());


// Classes in es6-
class Person6 {
    age = 28;
    constructor(name, dob, edu = 'BE') { //only call first time at the time of new instance is created or initialization
        this.edu = edu;
        this.name = name;
        this.dob = dob;
    }

    calcualteAge() {
        let a = 19;
        var b = 23;
        return 2020 - this.dob;
    }
}

var kalPerson = new Person6('kalyani', 1992);
var kalPersonEdu = new Person6('kalyani', 1992, 'B.Tech');
console.log(kalPerson, kalPersonEdu, kalPerson.calcualteAge());


// _____Static method _________
// Static methods are not accessible by it's instances,but it can be accessible by it's parent only
// Static methods are often used to create utility functions for an application.
// Static methods doen't have access of data stored in class. / we cannot access 'this' inside static mehtod
// Static can access only 'static' data

class Car {
    static cName = 'MYCAR';

    constructor(brand) {
        this.brand = brand;
    }

    static getBrand() {  //static method
        console.log('Brand get....', this.cName); // Static accessible
        console.log('Brand get....', this.brand); // Cannot access non static variables
        return this.brand;  // Cannot acces 'this'
    }
}


var fordCar = new Car("Ford");
// fordCar.getBrand(); //static method nt accesible in instance
Car.cName = "BMW" //access this method using main class for the instance and can change the data
let da = Car.getBrand() //access this method using main class for the instance
console.log(Car.cName, da);

// CarParentClass --> ModelSubClass --->FineSubClass;









// Interview questions
var a = [10, 3, 11, 2, 4, 6, 5, 8, 7];
var result = [];
var temp = 1;
a.sort((a, b) => a - b);
console.log(a);
a.forEach(ele => {
    console.log(ele >= 2, ele <= 11, (ele - temp), (ele - temp) !== 1);
    if (ele >= 2 && ele <= 11 && (ele - temp) !== 1) {
        console.log((ele - temp) !== 1);
        result.push(ele - 1);
    }
    temp = ele;
});
console.log(result);

// 2
var aa = 'omk';
(function sa() {
    console.log(aa);
    var aa = 'data';
})();

// 3
let aErl = 'Welcome to health club!';
let reverse = "";
console.log(aErl[0]);

for (let index = aErl.length; index < aErl.length, index > 0; index--) {
    reverse += aErl[index - 1]
}
console.log(reverse);

// 4
let obj1 = {
    a: 12, b: 122, c: 1222
}
let obj2 = {
    d: 'we', s: 'www', f: 1222
}
const c = { obj1, ...obj2 };
// OR
Object.keys(obj2).forEach(wlw => {
    obj1[wlw] = obj2[wlw]
})
console.log(obj1);

// 5 - find pairs of 2 elemnts whose sum is 100 and it should not repeat by reverse.  eg-[10,90] not repeat [90,10]
function printPairs() {
    var arr = [10, 20, 90, 80, 30, 70, 60, 50, 50, 9, 11, 89, 40, 91, 4, 5, 22];
    var result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] === 100) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(result);
}
printPairs();

// 6 - what is output?
function test(a) {
    console.log(a);
    var a = 100;
    console.log(a);
}
var a = 20;
test();  //undefined 100
test(a); //20 100

// 7
console.log(20 + 30 + '50'); //5050
console.log(20 + '30' + 50); //203050
console.log('20' + 30 + 50); //203050
