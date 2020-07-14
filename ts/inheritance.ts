// ++++++++++++++++++ Inheritance ++++++++++++++++++++++++

class Car {
    constructor() { }
    startEngine() {
        console.log('Engine Started');
    }
    stopEngine() {
        console.log('Engine Stopped');
    }
}

class BMW extends Car {
    constructor() {
        super();
    }
    stopEngine() {
        console.log('Engine Stopped for BMW');
    }

}
let b:Car = new BMW();
b.stopEngine();
