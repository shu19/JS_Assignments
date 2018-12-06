/*

4. Create a JS program to implement below:-

	   BankAccount
		|(accountNumber)
		|(accountHolderName)
		|(accountBalance)
	-------------------------
	|			|
	Savings			Current
	    (isSalary)		     (odLimit)


Now, 
create 1 object of savings with accountNumber, accountHolderName, accountBalance and isSalary.
create 1 object of currrent with accountNumber, accountHolderName, accountBalance and odLimit.

use savings account object to call a function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below 0.

use current account object to calla function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below negative of odLimit.

Now, call getCurrentBalance() from both the object, that will return the accountBalance of the object used to call this method.

*/

/**
 *  Bank Account is a class, In this bank details are stored,
 * 
 *  getCurrentBalance() method is used to show the balance in the account
 */
class BankAccount{
    
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }

    
    getCurrentBalance(){
        console.log(this.accountBalance);
    }
}
class Saving extends BankAccount{

    constructor(accountNumber,accountHolderName,accountBalance,isSalary){
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
    }

    
    /**
     * withdraw function is used to withdraw the money from account
     * here if amount to be withdrawl is greater than account Balance then it will show Insufficient Balance
     * else amount will be deducted from saving bank account
     * 
     * @param {number} amount amount to be withdrawl from account
     */
    
    withdraw(amount){
        if(amount>savings.accountBalance){
            console.log("Insufficient Balance");
        }else{
            savings.accountBalance-=amount;
        }
        
    }
}

class Current extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit){
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
    }

     /**
     * withdraw function is used to withdraw the money from account
     * here if amount to be withdrawl is greater than account Balance and over draft limit then it will show Insufficient Balance
     * else amount will be deducted from current bank account
     * 
     * @param {number} amount amount to be withdrawl from account
     */
    
    withdraw(amount){
        if(amount>(current.accountBalance+current.odLimit)){
            console.log("Insufficient Balance");
        }else{
            current.accountBalance-=amount;
        }
    
    }
}
var savings =new Saving("12345","Shubham",5000,true);
    

var current=new Current("12345","Shubham",10000,100000);

    
    
savings.withdraw(1000);
savings.getCurrentBalance();

current.withdraw(15000);
current.getCurrentBalance();

