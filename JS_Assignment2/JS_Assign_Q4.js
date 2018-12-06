/**
 
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

    use savings account object to call a function withdraw(amount), 
    that will subtract the amount from the accountBalance, Note that accountBalance should not go below 0.

    use current account object to calla function withdraw(amount), 
    that will subtract the amount from the accountBalance, 
    Note that accountBalance should not go below negative of odLimit.

    Now, call getCurrentBalance() from both the object, 
    that will return the accountBalance of the object used to call this method.

  */


  var savings = {
        accountNumber:12345,
        accountHolderName:"Shubham",
        accountBalance:1000,
        isSalary:true,
        withdraw(amount){

            if(amount<=this.accountBalance){
                this.accountBalance-=amount;
            
            }else{
                console.log("Insufficient balance");
            }
            
        },
        getCurrentBalance(){
            console.log(this.accountBalance);
        }
        
  }

  var current ={
    accountNumber:12345,
    accountHolderName:"Shubham",
    accountBalance:1000,
    odLimit:60000,  
    withdraw(amount){

        var limit=parseInt(this.accountBalance+this.odLimit);
        console.log(limit);
        if(amount<=limit){
            this.accountBalance-=amount;
        
        }else{
            console.log("Insufficient balance");
        }
        
    },
    getCurrentBalance(){
        console.log(this.accountBalance);
    }
  }

 savings.withdraw(600);
 savings.getCurrentBalance();
 
 current.withdraw(15000);
 current.getCurrentBalance();