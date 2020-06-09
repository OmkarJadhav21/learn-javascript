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
    lastName:'jadhav',
    age:25,
    fullName : function() {    //require call for function fullName()
        return this.name+" "+this.lastName;
    },
    get myFullname(){   //cannot pass any attribute and no need to give call() like function
        return this.name+" "+this.lastName;
    },
    set changeName(newName){
        this.lastName=newName.lastName;
        return this.name=newName.name;
    }
}


console.log('>>>',Person.fullName());
console.log('>>>',Person.myFullname);  //getter
console.log('>>>',Person.changeName = {name:"kalyani",lastName:'Katkar'});  //setter
console.log('>>>',Person.myFullname);  //getter


let multiplePerson =[
    {
        name:'abc',
        div:'b',
        branch:'Comm',
        get getName(){
            return this.name;
        },
        set changeBranch(newBranch){
            return this.branch=newBranch;
        }
    },
    {
        name:'abc',
        div:'b',
        get nameMe(){
            return this.name;
        },
        set branch(newBranch){
            return this.branch=newBranch;
        }
    }
];

console.log(multiplePerson[0].getName);
console.log(multiplePerson[0].changeBranch="Science",multiplePerson);

let sampleName = 'age';
console.log('Right Ways-->>',Person.name, Person['name'], Person[sampleName]);
console.log('Wrong Way--->>',Person.sampleName);

// id    name      age
// 1    'omkar'    25
// 2    'omkar2'    22
function getPro(dynamicName){    //dynamicrName ='name'
    console.log(Person[dynamicName]);    //person['name']
}
getPro('name');

//+++++++++++ Methods ++++++++++++
// apply(),bind(),call()

let pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    makeSum:function(){
        let sum = parseInt(this.firstValue)+parseInt(this.secondValue)
        console.log('Summession is '+ sum);
        return sum;
    },
    makeSumWithArgument: function(a,b) {
        let sum = parseInt(a)+parseInt(b)
        console.log('Summession is '+ sum ,this.makeSumWithArgument.arguments);
        return sum;
    },
    getFullPokeName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}
var doremon ={
    doreName:'Dorrr',
    firstValue:100,
    secondValue:200,
    getDoreData: function(animal,food,methodApplied) {
        console.log(this.getFullPokeName()+'Loves '+animal +' and '+food +' and method applied is '+ methodApplied);
    }
}
// ++++++ Test Example +++++++
// var getPokeData = function(animal,food,methodApplied) {
//     console.log(this.getFullPokeName()+'Loves '+animal +' and '+food +' '+ methodApplied);
// }
// getPokeData.apply(pokemon,['Doremon','Pizza','Applied']);  //Accepts array as an parameter
// +++++++++++++++++++++++++++

doremon.getDoreData.apply(pokemon,['Doremon','Pizza','Applied']);  //Accepts array as an parameter
doremon.getDoreData.call(pokemon,'Doremon','Mkck','Called');   //Accepts spred array as an parameter
doremon.getDoreData.bind(pokemon)('Doremon','Mkck','Binded attribute');   //Accepts spred array as an parameter
doremon.getDoreData.bind(pokemon,'Doremon','Mkck','Binded')();   //Accepts spred array as an parameter

// Get sum from pokemon with data existed in doremon
pokemon.makeSum.apply(doremon);
pokemon.makeSumWithArgument.apply(pokemon,[400,200]);
pokemon.makeSumWithArgument.call(pokemon,500,200);
pokemon.makeSumWithArgument.bind(pokemon,600,200)(); //function call require
pokemon.makeSumWithArgument.bind(pokemon)(200,200);


// arguments
function demo(a,b){
    console.log(demo.arguments,demo.arguments[2]);  //returns array of arguments/parameter.Applicable only inside function.
}
demo(10,'Stringgggg');

// Assign
let targetObj = { a : 2323 , b : 11 ,d:'omkar'};
let sourceObj = { c:'strr',d:'Kalyani'};
let mixed = Object.assign(sourceObj,targetObj);   //override elements in target with source and change the original target
console.log(mixed , targetObj,sourceObj);

let myObj= Object.assign({},targetObj,sourceObj,{id:1},{name:'tempName'})    //multiple sources combined into new empty object without change in original object
console.log(myObj ,targetObj,sourceObj);

let tempObj1 = { a: 0 , b: { c: 0}};
let tempObj2 = Object.assign({}, tempObj1);
console.log(tempObj2);
tempObj1.a=1;
tempObj2.a=4;
tempObj2.b.c=21;   //here the reference of object b is stored and hence value changed in both the object 1 and 2
console.log(tempObj1,tempObj2);

console.log(JSON.stringify(tempObj2));
console.log(JSON.parse(JSON.stringify(tempObj2)));

// caller
function firstFun(){
    console.log('aaz' ,firstFun.caller);  //returns the caller function from where first() is called,otherwise returns null
}
function secondFun(){
    console.log('bbz');
    firstFun();
}
secondFun();

// DefineProperties  - can define multiple properties for specified oject
let project = { projectName : 'javascript demo' , technology:'js' };
let createNewVersionKey = {
    "version": {
        value:100
    }
}
Object.defineProperties(project, createNewVersionKey )   //Adding third new key "version" to project object;

Object.defineProperties(project,{
    "changeTechnology":{
        set:function(params) {          //Creating setter with name "changeTechnology" using defineProperties
            this.projectName=params.newName
            this.technology=params.techno
        }
    },
    "angularVersion": {
        value:200
    },
    "getProjectName":{
        get:function() {
            return this.projectName;
        }
    }
});
project.changeTechnology={newName:'Angular Demo',techno:'Angular'};
console.log(project,project.getProjectName);

// Defineproperty - can define single property for specified oject
let kalyaniObj = { address:'Pune', pinCode:411009};

Object.defineProperty(kalyaniObj,"societyName",{
    value:'abc society'
});
Object.defineProperty(kalyaniObj,"getSociety",{
    get:function() {
        return this.societyName;
    }
});
Object.defineProperty(kalyaniObj,"changeAddress",{
    set:function(data) {
        return this.address=data;
    }
});
console.log(kalyaniObj,kalyaniObj.getSociety,kalyaniObj.changeAddress="Katraj");

// Freeze  - We cannot change any property and value of object,neither delete nor add;
let freezeSealObj = {
    free:'not free',
    cost:122
};
Object.defineProperty(freezeSealObj,"accessories",{
    value:'cover and bag'
});
console.log(' BEFORE ISFREEZE',Object.isFrozen(freezeSealObj));
Object.freeze(freezeSealObj);
freezeSealObj.free="asdadasd";   //after freeze we cannot set value and delete value;
console.log(console.log(' AFTER ISFREEZE',Object.isFrozen(freezeSealObj)));


// Seal - we cannot add/delete new property to object but can change value of existing property;
console.log(' BEFORE SEALed',Object.isSealed(freezeSealObj));
Object.seal(freezeSealObj);
console.log(console.log(' AFTER SEALed',Object.isSealed(freezeSealObj)));
delete freezeSealObj.free;
freezeSealObj.free = 'Avail in market';
console.log(freezeSealObj);

console.log(Object.isExtensible(freezeSealObj));
// Object.defineProperty(freezeSealObj,"isExt",{
//     value:'EXT'
// });
console.log(freezeSealObj, Object.isExtensible(freezeSealObj));

// isExtensible =true === object is not freeze and not sealed

// getOwnPropertyDescriptor
let propertyDescObj = {
    userName:'MYUSER',
    enrollNo:'ENRNO-112',
    password:'PASSabc@123',
    met:function(params) {
        return params
    }
}
console.log(Object.getOwnPropertyDescriptor(propertyDescObj,'enrollNo'));

Object.defineProperties(propertyDescObj,{
    'enrollNo':{
    // writable:false       // Cannot set new value to enrollNO but can delete property
    configurable:false   // Value can be changed but cannot delete property
    // enumerable:false     // false = not iterable property in object which changes object length
},
'userName':{
    enumerable:false,
    value:'NEW_USERNAME_ADDED'
}});
// propertyDescObj.enrollNo = "NEW_ENROLL";
// delete propertyDescObj.enrollNo;
console.log(propertyDescObj);

Object.keys(propertyDescObj).forEach((ele,index)=>{   //Iterating the object
    console.log(index,ele);
});

// Find length of object using key()
console.log(`Object Length is-->${Object.keys(propertyDescObj).length} beacuse property 'userName' is enumerable`);

// getOwnPropertyNames
console.log(Object.getOwnPropertyNames(propertyDescObj));  //returns array of all the properties in object
console.log(Object.keys(propertyDescObj));  //returns array of keys which are enumerable=true

// getOwnPropertySymbols
const symbolObj = {};
const a = Symbol('a');
const b = Symbol.for('b');
const name="mySymbol";
symbolObj[a] = 'localSymbol';
symbolObj[b] = 'globalSymbol';
symbolObj[name] = 'SYM';
console.log(symbolObj);
const objectSymbols = Object.getOwnPropertySymbols(symbolObj);
console.log(objectSymbols); 

// getPrototypeOf
let firstObj = { prog:'ionic',data:'default'};
let secondObj = Object.create(firstObj);  //takes the reference of object firstObj
firstObj.prog = "REact";
// console.log(firstObj, Object.getPrototypeOf(firstObj));
// console.log(Object.getPrototypeOf(firstObj).constructor.name);
// console.log(firstObj.__proto__.constructor.name);
console.log(Object.getPrototypeOf(firstObj));
console.log( secondObj,Object.getPrototypeOf(secondObj));


// is()  - Compaires 2 object/primitive data and returns boolean
let compair1 = {
    name:'comp',
    id:1
};
let compair2 = {
    name:'comp',
    id:1
}

console.log(Object.is(compair1,compair1));   //true - Same Reference and value
console.log(Object.is(compair1,compair2));   //false - Different Reference
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true
Object.is('foo', 'bar');     // false
Object.is([], []);           // false
console.log( NaN, 0/0,typeof NaN === typeof NaN);  //true


// Object.isExtensible - Checks whether we can add new proprty/value in object or not?
let preventObj = {
color:'Red',
data:'Stop'
};

Object.preventExtensions(preventObj);   //Cannot add new proprty in object but can delete property and modify its value
// Object.defineProperty(preventObj,"newPRop",{
//     value:'gooo'
// })
delete preventObj.color;
preventObj.color ="Yellow";
console.log(preventObj,Object.isExtensible(preventObj));


// setPrototypeOf
let setProtoObj = { sampleName:'mnop', lamp:'logic', a:10, b:22 };

let setFunObj = {
    name:'sum',
    summmation:function(a,b){
        return a+b;
    }
}
console.log(setProtoObj,Object.setPrototypeOf(setProtoObj,setFunObj));   //Set setFunObj object to setProtoObj's prototype

console.log(setProtoObj.__proto__.summmation(setProtoObj.a,setProtoObj.b));
console.log(Object.getPrototypeOf(setProtoObj).summmation(setProtoObj.a,setProtoObj.b));


// toString
console.log(preventObj.toString());
console.log(JSON.stringify(preventObj));



// 1. Create new object(firstObj) which having the proto of another object(anotherObj)
// 2. anotherObj is having function which checks whether given value is even or odd(checkEvenOddFun)
// 3. Send param for checkEvenOddFun from newly created object (firstObj)
// 4. Call checkEvenOddFun method from firstObj
// 5. Cannot change value of firstObj param (externally/set)
// 6. Store result of checkEvenOddFun in firstObj

// let as = {
//     asd:function(p){
//         console.log(p);
        
//         return `strinf od ${p}`;
//     }
// }
// let abc ={
//     name:'sadsd',
//     id:22,
// }

// console.log(abc);
// Object.defineProperty(abc,'result',{
//     value:as.asd.apply(abc,[abc.id])
// })
// console.log(abc);