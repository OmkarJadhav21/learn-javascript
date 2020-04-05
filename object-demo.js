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
    }
});
project.changeTechnology={newName:'Angular Demo',techno:'Angular'};
console.log(project);
// HW -getter


// Defineproperty - can define single property for specified oject
let kalyaniObj = { address:'Pune', pinCode:411009};

Object.defineProperty(kalyaniObj,"societyName",{
    value:'abc society'
});

console.log(kalyaniObj);
// HW - getter and setter

