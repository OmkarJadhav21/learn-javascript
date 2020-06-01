// ____________ Polymorphism __________
// poly -many  morphism-forms   -  To create polymorphism we require inheritance and same name method.

class PersonPoly {
    constructor(name, age,fun) {
        this._name = name;
        this._age = age;
        this.sumOfTwoNumbers = fun;
    }

    showInfo() {
        console.log("Im inherited b " + this._name + ", aged " + this._age);
    }
}

class Employee extends PersonPoly {
    constructor(name, age, dob) {
        super(name, age,function sum(a,b) {
            console.log('Sum is -->',a+b);
            return a+b;
        });
        this._dob = dob;
    }

    showInfo() {
        console.log("Im " + this._name + ", with age  " + this._age + ", born in " + this._dob)
    }

    parentShowMethod(){
        super.showInfo();
    }
}

var myPersonPoly = new PersonPoly('Gaddar', 20);
var myEmployee = new Employee('Johny',25, 1994);
console.log(myEmployee);

myEmployee.sumOfTwoNumbers(10,12); //passing function as params
myEmployee.showInfo();  //invoke method from child
myEmployee.parentShowMethod();  //invoke method from parent
// Or
// myEmployee.__proto__.__proto__.showInfo.apply(myPersonPoly);
// myEmployee.__proto__.__proto__.showInfo.bind(myPersonPoly)();
// myEmployee.__proto__.__proto__.showInfo.call(myPersonPoly);
