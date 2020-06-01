// _______________ Inheritance _______________
// private and protected proprties are not accessible in inheritance sub-class

class CarParentClass {
    constructor(brnd, prc) {
        this.brand = brnd;
        this.price = prc;
    }
    getBrand() {
        return this.brand
    }
}

class ModelSubClass extends CarParentClass {
    constructor(a, b, c) { //Super refer to the parent class
        super(a, b) //Refer the parent class-constructor-passing values to CarParentClass
        this.model = c;
        super.brand = "Jaguar";  //Accessing parent class data
    }
    getModel() {
        return this.model;
    }
}
class FineSubClass extends ModelSubClass {

    constructor(x, y, z, ownprop) {
        super(x, y, z);
        this.ownData = ownprop;
    }
}

let price = 25000000;
let fine = new FineSubClass('NewBrand', price, 'c35220', 'SelectedCar');
console.log('fineSubClass', fine, fine.getBrand());

let mod = new ModelSubClass('Mercedez', null, 'c350');
mod.price = 1232123321;
mod.brand = 'Scoda';
console.log(mod);
