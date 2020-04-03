// *********** Object *************

// Ways of creating object
let obj1 = new Object();
let obj2 = {name:'omkar',id:1};
let obj3 = Object.create(obj2);  //pass object to its contsrcutor
let obj4 = Object.create(null);  //passing null to its contsrcutor

console.log(obj1,obj2,obj3);

// Accessing values from object
let Person = {
    id:1,
    name:'omkar',
    age:25
}
let sampleName = 'age';
console.log('Right Ways-->>',Person.name, Person['name'], Person[sampleName]);
console.log('Wrong Way--->>',Person.sampleName);

// id    name      age
// 1    'omkar'    25
function getPro(dynamicName){
    console.log(Person[dynamicName]);
}
getPro('name');