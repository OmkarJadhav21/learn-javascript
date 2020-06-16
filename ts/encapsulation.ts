class BankT {
    private mainBalence = 10000;
    private password = 'xyyyzz';
    public branch: string;
    public accountType: string;

    constructor(accType, branch) {
        this.accountType = accType;
        this.branch = branch;  // Can be accessed in instances and main class also.
    }
    set orignalMainBalence(updatedBalence) {
        this.mainBalence += updatedBalence;
        console.log(this.mainBalence);
    }
    get retrivePasswordAndBalance() {
        return {
            password: this.password,
            originalBalence: this.mainBalence
        }
    }
    set changePassword(newPass){
        this.password = newPass;
    }
    get retrieveMainBalence() {
        return this.mainBalence;
    }

}

let bankBalT = new BankT('Current', 'Pune');
console.log('Orignal value',bankBalT.retrieveMainBalence);
bankBalT.orignalMainBalence = 3000;
console.log('Updated value',bankBalT.retrieveMainBalence);
console.log('Old pass',bankBalT.retrivePasswordAndBalance);
bankBalT.changePassword = 'newpass@123';
console.log('New pass',bankBalT.retrivePasswordAndBalance);
