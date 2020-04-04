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
        console.log('Summession is '+ sum);
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
pokemon.makeSumWithArgument.call(pokemon,400,200);
pokemon.makeSumWithArgument.bind(pokemon,400,200)(); //function call require
pokemon.makeSumWithArgument.bind(pokemon)(400,200);