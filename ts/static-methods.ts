class CarType {
    model: string;
    protected privData = 'ecript'
    static carName = 'baseCar';

    constructor(model) {
        this.model = model;
    }

    static getBrand() {  //static method
        console.log('Brand get....', this.carName);
        // return this.model;  //cannot access the current object inside the static method
    }
}
CarType.carName = 'newCar'  //changing name
CarType.getBrand();


class ModelSub extends CarType {
    modelwa: string;
    constructor(a, b) { //Super refer to the parent class
        super(a) //Refer the parent class-constructor-passing values to CarParentClass
        this.modelwa = b;
    }
    getModel() {
        return this.modelwa;
    }
}
// let d = new ModelSub('Tesla','T222');

class Encap {
    private data = "KEy";

    getData() {
        return this.data;
    }
    setData(newData) {
        this.data = newData
    }

}
let newEnc = new Encap();
newEnc.setData('password');
console.log(newEnc);

// polymorphism  - use a single method of main class in different instances i.e. both the classes have same method name but it can access it;s own 
class Animal {
    animalSound() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    animalSound() {
        console.log("The dog says: bow wow");
    }
    soundFromPArent(){
        super.animalSound();  //call parent's same name methods
    }
}

let anim = new Animal();
let dog = new Dog();
anim.animalSound()
dog.animalSound()