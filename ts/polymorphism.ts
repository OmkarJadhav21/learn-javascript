// +++++++++++++ polymorphism ++++++++++++++++
// Typescript supports polymorphism concept in many ways-
// 1. function overriding
// 2. function overloading
// 3. Interface


// 1. Function Overriding --
class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    processName() {
        console.log('processName method in parent class', this.name)
    }
}
class Child extends Parent {
    name:string;
    constructor(name: string) {
        super(name);
    }
    processName() {
        console.log('processName method in Child class', this.name)
    }
}

let myObject1 = new Parent("john");
myObject1.processName();

let myObject = new Child("Kiran");
myObject.processName();



// 2. Function Overloading --

class MyClass {
    constructor() {

    }

    mymethod(name?: string | number) {
        console.log('method with string argument');
    }
}
let myclass = new MyClass();
console.log(myclass.mymethod());


// 3. Interface

interface Activity {
    currency: number | string | null;
    grid: WkGrid;
    chageColor();
}
interface WkGrid {
    changeGrid();
    mainTable: TableConfig[] | Array<TableConfig>;
}
interface TableConfig {
    row: number;
    columns: number;
}

// mainTable = [
//     {
//     row: 10,
//     columns: 10
//     }
// ]

class RedTheme implements Activity {
    grid: WkGrid;
    currency: string = 'INR'

    chageColor() {
        console.log('Color changed to REd');
    }
}
class BlueTheme implements Activity {
    grid: WkGrid;
    currency: number = 222;

    chageColor() {
        console.log('Color changed to Blue');
    }
}