// ___________________ Abstraction ______________
// Hidding the implementation details and showing only essential info to the user.
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
// 1. By using Abstract class___________
// Abtract class can have both abstract methods ( no body/implementation )and normals methods
// Abstract keyword can be applicable to classes and methods only.
// We cannot create instance of abstract class
// Abtract method cannot have body but can be used in inherited class and implement its body
var AbsClass = /** @class */ (function () {
    function AbsClass() {
    }
    AbsClass.prototype.calcualteDifference = function (a, b) {
        return a - b;
    };
    ;
    return AbsClass;
}());
// let absInst = new AbsClass();  // Cannot create instance of abstract class
var UseAbst = /** @class */ (function (_super) {
    __extends(UseAbst, _super);
    function UseAbst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UseAbst.prototype.calculateSum = function (a, b) {
        return a + b;
    };
    return UseAbst;
}(AbsClass));
var useIt = new UseAbst();
console.log(useIt.calculateSum(10, 233));
console.log(useIt.calcualteDifference(10, 233));
// By using Interface____________
var BankUser = /** @class */ (function () {
    function BankUser() {
        this.mainBalence = 0;
    }
    BankUser.prototype.whithdraw = function (money) {
        this.mainBalence -= money;
        return this.mainBalence;
    };
    BankUser.prototype.deposite = function (money) {
        this.mainBalence += money;
        return this.mainBalence;
    };
    return BankUser;
}());
var bankUserInst = new BankUser();
console.log(bankUserInst.deposite(100));
console.log(bankUserInst.whithdraw(70));
// ///////////////////
var bankSysObj = {}; // Created object of interface
bankSysObj.mainBalence = 1000; // Set 1000 as mainbalence
bankSysObj.deposite = function (a) {
    this.mainBalence += a;
    return this.mainBalence;
};
console.log(bankSysObj.deposite(200));
// console.log(bankSysObj.whithdraw(100));  //It gives error - withdraw in not a function (beacuse we have not implemented function withdraw in the interface object bankSysObj)
// Eg- Calcualte Area of Circle and Sqaure
var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pie = 3.14;
        _this.radius = 10;
        return _this;
    }
    Circle.prototype.calcualteArea = function () {
        return this.pie * (this.radius * this.radius);
    };
    return Circle;
}(Area));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 100;
        _this.width = 200;
        return _this;
    }
    Square.prototype.calcualteArea = function () {
        return this.length * this.width;
    };
    return Square;
}(Area));
var circleInst = new Circle();
var squareInst = new Square();
console.log('Cirle Area', circleInst.calcualteArea());
console.log('Square Area', squareInst.calcualteArea());
