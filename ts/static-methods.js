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
var CarType = /** @class */ (function () {
    function CarType(model) {
        this.privData = 'ecript';
        this.model = model;
    }
    CarType.getBrand = function () {
        console.log('Brand get....', this.carName);
        // return this.model;  //cannot access the current object inside the static method
    };
    CarType.carName = 'baseCar';
    return CarType;
}());
CarType.carName = 'newCar'; //changing name
CarType.getBrand();
var ModelSub = /** @class */ (function (_super) {
    __extends(ModelSub, _super);
    function ModelSub(a, b) {
        var _this = _super.call(this, a) //Refer the parent class-constructor-passing values to CarParentClass
         || this;
        _this.modelwa = b;
        return _this;
    }
    ModelSub.prototype.getModel = function () {
        return this.modelwa;
    };
    return ModelSub;
}(CarType));
// let d = new ModelSub('Tesla','T222');
var Encap = /** @class */ (function () {
    function Encap() {
        this.data = "KEy";
    }
    Encap.prototype.getData = function () {
        return this.data;
    };
    Encap.prototype.setData = function (newData) {
        this.data = newData;
    };
    return Encap;
}());
var newEnc = new Encap();
newEnc.setData('password');
console.log(newEnc);
// polymorphism  - use a single method of main class in different instances i.e. both the classes have same method name but it can access it;s own 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.animalSound = function () {
        console.log("The animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.animalSound = function () {
        console.log("The dog says: bow wow");
    };
    Dog.prototype.soundFromPArent = function () {
        _super.prototype.animalSound.call(this); //call parent's same name methods
    };
    return Dog;
}(Animal));
var anim = new Animal();
var dog = new Dog();
anim.animalSound();
dog.animalSound();
