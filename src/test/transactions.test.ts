import {Transactions} from "../main/transactions";
import {Account} from "../main/account";

describe('Account transactions', () => {
    it("should print the headers, when print statement is invoked", () => {
        const account = new Account()
        const transactions = new Transactions(account)
        const statement = transactions.printStatement()
        expect(statement).toContain("Date || Amount || Balance")
    })

    it("should store the deposit", () => {
        const account = new Account()
        const transactions = new Transactions(account)
        const deposit = transactions.deposit(100, "14/09/2021")
        expect(deposit).toEqual("Success")
    })

    it("should store the deposit and print the transaction", () => {
        const account = new Account()
        const transactions = new Transactions(account)
        const deposit = transactions.deposit(100, "14/09/2021")
        const statement = transactions.printStatement()
        expect(statement).toEqual("Date || Amount || Balance\n 14/09/2021 || 100 || 100")
    })
});

const mockTransactions = [{
    amount: 100,
    date: '14/09/2021',
    balance: 100
},
    {
        amount: 200,
        date: '15/09/2021',
        balance: 300
    }];

describe("Test transactions", () => {
    const account = new Account()
    jest.spyOn(account, 'getTransactions').mockImplementation(() => mockTransactions);
    it("should store multiple deposits and print the transaction", () => {
        const transactions = new Transactions(account)
        const statement = transactions.printStatement()
        expect(statement).toEqual("Date || Amount || Balance\n 15/09/2021 || 200 || 300\n 14/09/2021 || 100 || 100")
    })
})

