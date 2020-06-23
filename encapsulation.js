// +++++++++++++++++ Encapsulation +++++++++++++++++++
/* 
The JavaScript Encapsulation is a process of binding the data (i.e. variables)
 with the functions acting on that data. It allows us to control the data and validate it.
        ---Encapsulation can be acheived in these ways-
1. Use var keyword to make data members private.
2. Use setter methods to set the data and getter methods to get that data.
 */


// _______________________________________________
// Access Specifier - public, private, protected
// Accessor functions - get (Getter), set (Setter) 
// _______________________________________________


// 1. Use var keyword to make data members private.
// How can you write constructor without a class?  Answer-->

function BankConstructor(balence) {  //constructor
    var _balence = balence;

    getBal = () => { return _balence }
    setBal = (updated) => {
        this._balence += updated
        console.log(this._balence);
    }

}

let bankCon = new BankConstructor(0);
bankCon.setBal = 100;
// bankCon._balence  //not accessible
console.log(bankCon._balence);




// 2. Use setter methods to set the data and getter methods to get that data.
class Bank {

    constructor(accType, branch) {
        this._mainBalence = 0;
        Bank._accountType = accType; //Cannot accessible in instances, only avail in main class
        this._branch = branch;  // Can be accessed in instances and main class also.
    }
    get mainBalence() {
        return this._mainBalence;
    }
    set mainBalence(updatedBalence) {
        this._mainBalence += updatedBalence;
        console.log(this.mainBalence);
    }
}
let bankBal = new Bank('saving', 'pune');

bankBal.mainBalence = 20000
console.log(bankBal.mainBalence);
console.log(bankBal);




// function Bank(accType, branch) {
//     return ({
//         _accType =accType,
//         _branch =branch
//     })
// }