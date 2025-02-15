class BankAccount {
    constructor(name, age ,balance, address){
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.address = address;
    }
    accountInfo() {
        console.log(`client name is ${this.name}, balance is ${this.balance}`)
    }
    deposit(amount) {
        return new Promise((resolve, reject) => {
            if (typeof amount !== 'number' || amount <= 0) {
                reject("Deposit amount must be greater than zero.");
            } else {
                setTimeout(() => {
                    resolve(amount);
                }, 1000);
            }
        });
    }

    addAmount(amount) {
        this.balance += amount;
        return `Amount added. New balance: ${this.balance}`;
    }

    async withdraw(amount) {
        try {
            const hasEnoughBalance = await this.balanceCompare(amount);
            if (!hasEnoughBalance) {
                return "insufficient funds!";
            }
            this.balance -= amount;
            return `Withdrawal successful. new balance: ${this.balance}`;
        } catch (error){
            return `withdrawal error : ${error}`
        };
    }

    balanceCompare(amount){
        return new Promise ((resolve , reject ) =>{
            if (typeof amount !== "number" || amount <= 0){
                reject("invalid withdrawal amount")
            } else {
                setTimeout(() => {
                    resolve(this.balance >= amount);
                },1000)
            }
        })
    }
}






//debugging ==========



const address = {
    city: "Port Said",
    street: "shre3 100",
    buildingNumber: 10,
    apartmentNumber: 2,
}



const myAccount = new BankAccount("Fares" ,16 , 1000 , address);



myAccount.accountInfo();


myAccount.deposit(500)
    .then(amount => myAccount.addAmount(amount))
    .then(message => console.log(message))
    .catch(error => console.error("deposit error:", error));






myAccount.withdraw(300)
    .then(message => console.log (message))
    .catch(error => console.error("withdrawal error:", error));