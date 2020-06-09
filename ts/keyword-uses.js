/*
1. instanceof keyword   - Avail in both js and ts
2. Generic Types        - Avail in ts only
3. as keyword           - Avail in ts only
*/
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
// ++++++++++++ 'instanceof' keyword +++++++++++++++
// Instanceof requires only class at right hand to compair with left
// 'instanceof' keyword worked for the extended class also.
/* _________________________________________
 SYNTAX -  object instanceof Class
____________________________________________ */
var ParentD = /** @class */ (function () {
    function ParentD() {
    }
    return ParentD;
}());
var ChildD = /** @class */ (function (_super) {
    __extends(ChildD, _super);
    function ChildD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildD;
}(ParentD));
var SampleD = /** @class */ (function (_super) {
    __extends(SampleD, _super);
    function SampleD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SampleD;
}(ParentD));
var parentInst = new ParentD(); //Instance of Parent class
var childInst = new ChildD(); //Instance of Child class
var sampleInst = new SampleD(); //Instance of Sample class
console.log('===>>>Parent', parentInst instanceof ParentD);
console.log('===>>>Child+parent', childInst instanceof ParentD);
console.log('===>>>Child', childInst instanceof ChildD);
console.log('===>>>SampleParnt', sampleInst instanceof ParentD);
console.log('===>>>SampleChild', sampleInst instanceof ChildD);
console.log('===>>>Sample Own', sampleInst instanceof SampleD);
var dbData = {}; // Here 2 different/same types can pass
dbData.age = '21';
dbData.a = '22'; // extended data
var dbData2 = {};
var resArr = [];
var singleResult = {};
singleResult.semister = 'First';
singleResult.marks = 1600;
resArr.push(singleResult);
var resobj = {};
resobj.semister = 'Second';
resobj.marks = 1900;
var outArr = [];
var inArr = [];
inArr.push(resArr);
outArr.push(inArr);
dbData2.resultArr = outArr; //   OR   dbData2.resultArr = [[resArr]]
dbData2.resultObj = resobj;
dbData2.resultVar = resArr;
console.log('Generic Interface-->', dbData, dbData2);
// ++++++++++++++ Generic Class ++++++++++++++++
var GenericClassDemo = /** @class */ (function () {
    function GenericClassDemo() {
    }
    return GenericClassDemo;
}());
var genericInstanceBool = new GenericClassDemo(); //different/same types can pass
var genericInstanceStr = new GenericClassDemo();
console.log('Generic Class-->', genericInstanceBool, genericInstanceStr);
// ++++++++++++++ Generic Class implements Generic Interface ++++++++++++++++
var GenClassInf = /** @class */ (function () {
    function GenClassInf() {
    }
    GenClassInf.prototype.simpleMethod = function (key, value) {
        console.log("key is--> " + key + " of type " + typeof key);
        console.log("value is--> " + value + " of type " + typeof value);
    };
    return GenClassInf;
}());
var MixClassAndInterf = new GenClassInf(); //Instance of class but of type Asprocess
MixClassAndInterf.age = '12';
var MixClassAndInterfOwn = new GenClassInf();
// Instance of class of type class
MixClassAndInterfOwn.simpleMethod('isGeneric', true);
var recommanded = {}; //best for .ts/.tsx files
// Or
var notRecommanded = {}; //best for .jsx files
