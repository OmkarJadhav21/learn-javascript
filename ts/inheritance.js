// ++++++++++++++++++ Inheritance ++++++++++++++++++++++++
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        console.log('Engine Started');
    };
    Car.prototype.stopEngine = function () {
        console.log('Engine Stopped');
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super.call(this) || this;
    }
    BMW.prototype.stopEngine = function () {
        console.log('Engine Stopped for BMW');
    };
    return BMW;
}(Car));
var b = new BMW();
b.stopEngine();
