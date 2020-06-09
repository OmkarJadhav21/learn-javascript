/* 
1. instanceof keyword   - Avail in both js and ts
2. Generic Types        - Avail in ts only
3. as keyword           - Avail in ts only
*/




// ++++++++++++ 'instanceof' keyword +++++++++++++++
// Instanceof requires only class at right hand to compair with left
// 'instanceof' keyword worked for the extended class also.
/* _________________________________________
 SYNTAX -  object instanceof Class
____________________________________________ */

class ParentD {

}
class ChildD extends ParentD {

}
class SampleD extends ParentD {

}
let parentInst = new ParentD();  //Instance of Parent class
let childInst = new ChildD();    //Instance of Child class
let sampleInst = new SampleD();  //Instance of Sample class

console.log('===>>>Parent', parentInst instanceof ParentD);
console.log('===>>>Child+parent', childInst instanceof ParentD);
console.log('===>>>Child', childInst instanceof ChildD);
console.log('===>>>SampleParnt', sampleInst instanceof ParentD);
console.log('===>>>SampleChild', sampleInst instanceof ChildD);
console.log('===>>>Sample Own', sampleInst instanceof SampleD);


interface Demo {
    a: string;
    b: number
}
// +++++++++++ Generic Interface +++++++++++
interface AsProcess<T, U> extends Demo {
    name: string;
    age: T;
    isBoolean: U,
    resultVar: Array<Result>;//  [ {semister:'first',marks:60 },{semister:'second',marks:90 } ]
    resultObj: Result;  // { }
    resultArr: Array<Array<Array<Result>>>;  // [ [ [ { } ] ] ];
}
let dbData = {} as AsProcess<string, boolean>;  // Here 2 different/same types can pass
dbData.age = '21';
dbData.a = '22';  // extended data

let dbData2 = {} as AsProcess<number, string>;

let resArr: Array<Result> = [];
let singleResult = {} as Result;
singleResult.semister = 'First';
singleResult.marks = 1600;
resArr.push(singleResult);

let resobj: Result = {} as Result;
    resobj.semister = 'Second';
    resobj.marks = 1900;

let outArr: Array<Array<Array<Result>>> = [];
let inArr: Array<Array<Result>> = [];
inArr.push(resArr);
outArr.push(inArr);

dbData2.resultArr = outArr;     //   OR   dbData2.resultArr = [[resArr]]

dbData2.resultObj = resobj;
dbData2.resultVar = resArr;

console.log('Generic Interface-->', dbData, dbData2);

// ++++++++++++++ Generic Class ++++++++++++++++
class GenericClassDemo<T, U> {
    public name: string;
    private age: T;
    protected isBoolean: U;
    static result: Array<Result>//  [ {semister:'first',marks:60 },{semister:'second',marks:90 } ]
}
let genericInstanceBool = new GenericClassDemo<number, boolean>();//different/same types can pass
let genericInstanceStr = new GenericClassDemo<number, string>();
console.log('Generic Class-->', genericInstanceBool, genericInstanceStr);


// ++++++++++++++ Generic Class implements Generic Interface ++++++++++++++++
class GenClassInf<T, U> implements AsProcess<T, U>{
    resultObj: Result;
    resultArr: Result[][][];

    name: string;
    age: T;
    isBoolean: U;
    resultVar: Result[];
    a: string;
    b: number;

    simpleMethod(key: T, value: U) {
        console.log(`key is--> ${key} of type ${typeof key}`);
        console.log(`value is--> ${value} of type ${typeof value}`);
    }
}
let MixClassAndInterf: AsProcess<string, boolean> = new GenClassInf<string, boolean>();  //Instance of class but of type Asprocess
MixClassAndInterf.age = '12';
let MixClassAndInterfOwn: GenClassInf<string, boolean> = new GenClassInf<string, boolean>();
// Instance of class of type class
MixClassAndInterfOwn.simpleMethod('isGeneric', true);



//+++++++++++++++++ 'as' keyword ++++++++++++++++
// The 'as' keyword is a Type Assertion in TypeScript which tells the compiler
//to consider the object as another type than the type the compiler infers the object to be.

interface Result {
    semister: string;
    marks: number;
}
interface Pair {
    pairA: boolean;
    pairB: boolean;
}
let recommanded = {} as Pair;  //best for .ts/.tsx files
// Or
let notRecommanded = <Pair>{}; //best for .jsx files