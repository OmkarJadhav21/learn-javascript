// _______________ Abstraction _______________
// Hidding implementation details and showing only essential info to the user.
// 'Abstract' class/function contain only incomplete methods.
// 'Abstract' keyword is only used for class and function.


// 1. This example depicts whether users can create an instance of Abstract class or not.

function Vehicle(vehicleName) {
    this.vehicleName = vehicleName;
    throw new Error('Cannot create instance of abstract class');
}
// let absInst = new Vehicle('Veh');


// 2. Here is an example to achieve abstraction
Vehicle.prototype.dispalyName = function () {
    return this.vehicleName;
}

function Bike(name) {
    this.vehicleName= name;
}

Bike.prototype = Object.create(Vehicle.prototype); //inheritance
console.log(Vehicle.prototype,Bike.prototype);

let bikeInst = new Bike("Yamaha");
console.log('bikeInst',bikeInst);

console.log(bikeInst.dispalyName());
console.log(bikeInst.__proto__.__proto__.dispalyName.apply(bikeInst));


// 3. Checking whether Bike is instanceOf Vehicle or not?
console.log(bikeInst instanceof Vehicle);
console.log(bikeInst instanceof Bike);
