var BankT = /** @class */ (function () {
    function BankT(accType, branch) {
        this.mainBalence = 10000;
        this.password = 'xyyyzz';
        this.accountType = accType;
        this.branch = branch; // Can be accessed in instances and main class also.
    }
    Object.defineProperty(BankT.prototype, "orignalMainBalence", {
        set: function (updatedBalence) {
            this.mainBalence += updatedBalence;
            console.log(this.mainBalence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankT.prototype, "retrivePasswordAndBalance", {
        get: function () {
            return this.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankT.prototype, "changePassword", {
        set: function (newPass) {
            this.password = newPass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankT.prototype, "retrieveMainBalence", {
        get: function () {
            return this.mainBalence;
        },
        enumerable: true,
        configurable: true
    });
    return BankT;
}());
var bankBalT = new BankT('Current', 'Pune');
console.log('Orignal value', bankBalT.retrieveMainBalence);
bankBalT.orignalMainBalence = 3000;
console.log('Updated value', bankBalT.retrieveMainBalence);
console.log('Old pass', bankBalT.retrivePasswordAndBalance);
bankBalT.changePassword = 'newpass@123';
console.log('New pass', bankBalT.retrivePasswordAndBalance);
