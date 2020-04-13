console.log('main this', this);  //Always points to the global window object

var myObj = {
    name: 'omkar',
    birthYear: 1994,
    calculateAge: function () {
        console.log('This is changed', this);
        return 2020 - this.birthYear
    }
}

var kalObj = {
    name: 'kal',
    birthYear: 1992
}
console.log(kalObj);
kalObj.calculateAge = myObj.calculateAge;
console.log(kalObj);

let modifiedAge = kalObj.calculateAge();  // 
let omAge = myObj.calculateAge();   // prints myObj as 'this';
let kalAge = myObj.calculateAge.apply(kalObj);  // prints kalObj as 'this';
let kalAge2 = myObj.calculateAge.bind(kalObj)();  // prints kalObj as 'this';
let kalAge3 = myObj.calculateAge.call(kalObj);  // prints kalObj as 'this';

console.log(modifiedAge, omAge, kalAge, kalAge2, kalAge3);
