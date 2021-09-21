import {Account} from './account'

export class Transactions {
    account: Account;

    constructor(account: Account) {
        this.account = account
    }

    printStatement(){
        //todo
        let printTransactions: string = ''
        const transactions = this.account.getTransactions();

        transactions.slice().reverse().forEach((key)=>{
            printTransactions += `\n ${key.date} || ${key.amount} || ${key.balance}`
        })
        return `Date || Amount || Balance${printTransactions}`
    }

    deposit(amount: number, date: string) {
        this.account.deposit(amount, date);
        return "Success"
    }
}