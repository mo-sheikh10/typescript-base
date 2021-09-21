interface Itransactions {
    amount: number,
    date: string,
    balance: number
}

export class Account {
    transactions: Itransactions[]
    totalBalance: number

    constructor() {
        this.totalBalance = 0;
        this.transactions = []
    }

    deposit(amount: number, date: string){
        this.transactions.push({
            amount: amount,
            date: date,
            balance: this.totalBalance + amount
        })
        this.totalBalance += amount;
    }

    getTransactions(): Itransactions[] {
        return this.transactions;
    }
}