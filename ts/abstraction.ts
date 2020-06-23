// ___________________ Abstraction ______________
// Hidding the implementation details and showing only essential info to the user.


// 1. By using Abstract class___________
// Abtract class can have both abstract methods ( no body/implementation )and normals methods
// Abstract keyword can be applicable to classes and methods only.
// We cannot create instance of abstract class
// Abtract method cannot have body but can be used in inherited class and implement its body

abstract class AbsClass {
    abstract calculateSum(a, b); //Abtract methods

    public calcualteDifference(a, b) {  //Normal method
        return a - b
    };
}
// let absInst = new AbsClass();  // Cannot create instance of abstract class


class UseAbst extends AbsClass {
    calculateSum(a: number, b: number) {
        return a + b;
    }
}
let useIt = new UseAbst();
console.log(useIt.calculateSum(10, 233));
console.log(useIt.calcualteDifference(10, 233));




// By using Interface____________
class BankUser implements BankSys {
    public mainBalence: number = 0;
    whithdraw(money: number) {
        this.mainBalence -= money;
        return this.mainBalence;
    }
    deposite(money: number) {
        this.mainBalence += money;
        return this.mainBalence;
    }
}
let bankUserInst = new BankUser();
console.log(bankUserInst.deposite(100));
console.log(bankUserInst.whithdraw(70));

// ///////////////////

interface BankSys {
    mainBalence: number;
    whithdraw(money);
    deposite(money);
}

// ///////////////////

let bankSysObj = {} as BankSys;         // Created object of interface
bankSysObj.mainBalence = 1000;          // Set 1000 as mainbalence
bankSysObj.deposite = function (a) {   // Assign anonymous function to 'deposite' method in object bankSysObj
    this.mainBalence += a;
    return this.mainBalence;
}
console.log(bankSysObj.deposite(200));
// console.log(bankSysObj.whithdraw(100));  //It gives error - withdraw in not a function (beacuse we have not implemented function withdraw in the interface object bankSysObj)


// Eg- Calcualte Area of Circle and Sqaure

abstract class Area {
    abstract calcualteArea();
}

class Circle extends Area {
    private readonly pie = 3.14;
    private radius = 10;

    calcualteArea() {
        return this.pie * (this.radius * this.radius);
    }

}
class Square extends Area {
    private length = 100;
    private width = 200;

    calcualteArea() {
        return this.length * this.width;
    }

}

let circleInst = new Circle();
let squareInst = new Square();
console.log('Cirle Area', circleInst.calcualteArea());
console.log('Square Area', squareInst.calcualteArea());
