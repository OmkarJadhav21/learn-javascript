// +++++++++++++ polymorphism ++++++++++++++++
// Typescript supports polymorphism concept in many ways-
// 1. function overriding
// 2. function overloading
// 3. Interface

// Access specifier types -
// 1. public - Access all over
// 2. private - Can be accessed only within the class not in instance and inheritance
// 3. protected = Can be accessed only within the class and it's inheritance.

// 1. Function Overriding --
class Parent {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    processName() {
        console.log('processName method in parent class', this.name)
    }
}

class Child extends Parent {
    name: string;
    constructor(name: string) {
        super(name);
    }
    processName() {
        console.log('processName method in Child class', this.name)
    }
}
class Sample extends Child {
    constructor(a) {
        super(a);
    }
    sampleData = 'sample'
}

let myObject1 = new Parent("john"); //Instance of parent
myObject1.processName();

let myChild = new Child("Kiran");
myChild.processName();




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



let sam = new Sample('nae');

// Instanceof requires only class at right hand to compair with left
console.log('===>>>Parent', myObject1 instanceof Parent);
console.log('===>>>Child+parent', myChild instanceof Parent);
console.log('===>>>Child', myChild instanceof Child);
console.log('===>>>SamplePAr', sam instanceof Parent);
console.log('===>>>SampleChild', sam instanceof Child);
console.log('===>>>Sample Own', sam instanceof Sample);