// +++++++++++++ polymorphism ++++++++++++++++
// Typescript supports polymorphism concept in many ways-
// 1. function overriding
// 2. function overloading
// 3. Interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Access specifier types -
// 1. public - Access all over
// 2. private - Can be accessed only within the class not in instance and inheritance
// 3. protected = Can be accessed only within the class and it's inheritance.
// 1. Function Overriding --
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    Parent.prototype.processName = function () {
        console.log('processName method in parent class', this.name);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.processName = function () {
        console.log('processName method in Child class', this.name);
    };
    return Child;
}(Parent));
var Sample = /** @class */ (function (_super) {
    __extends(Sample, _super);
    function Sample(a) {
        var _this = _super.call(this, a) || this;
        _this.sampleData = 'sample';
        return _this;
    }
    return Sample;
}(Child));
var myObject1 = new Parent("john"); //Instance of parent
myObject1.processName();
var myChild = new Child("Kiran");
myChild.processName();
// 2. Function Overloading --
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.mymethod = function (name) {
        console.log('method with string argument');
    };
    return MyClass;
}());
var myclass = new MyClass();
console.log(myclass.mymethod());
// mainTable = [
//     {
//     row: 10,
//     columns: 10
//     }
// ]
var RedTheme = /** @class */ (function () {
    function RedTheme() {
        this.currency = 'INR';
    }
    RedTheme.prototype.chageColor = function () {
        console.log('Color changed to REd');
    };
    return RedTheme;
}());
var BlueTheme = /** @class */ (function () {
    function BlueTheme() {
        this.currency = 222;
    }
    BlueTheme.prototype.chageColor = function () {
        console.log('Color changed to Blue');
    };
    return BlueTheme;
}());
var sam = new Sample('nae');
// Instanceof requires only class at right hand to compair with left
console.log('===>>>Parent', myObject1 instanceof Parent);
console.log('===>>>Child+parent', myChild instanceof Parent);
console.log('===>>>Child', myChild instanceof Child);
console.log('===>>>SamplePAr', sam instanceof Parent);
console.log('===>>>SampleChild', sam instanceof Child);
console.log('===>>>Sample Own', sam instanceof Sample);
