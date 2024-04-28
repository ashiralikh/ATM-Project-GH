import inquirer from "inquirer"
 
let myBalance = 100000; //Doller your current balance
let mypin = 1234;
let pinAnswer = await inquirer.prompt (
 [
    {
        name:"pin",
        massage:"Enter your pin",
        type:"number"
    }
 ]
 );

 if(pinAnswer.pin === mypin) {
    console.log("Correct pin code!!!");

   let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option",
                type:"list",
                choices:["Withdraw", "Check balance","Fast cash"]

            }
        ]
    );
    // console.log(operationAns);
    
    if(
        operationAns.operation === "Withdraw"){

        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    massage:"Enter your amount",
                    type:"number"
                }
            ]
        ); 
        if(amountAns.amount > myBalance){
            console.log("Insufficient balance");
            
        }
        // = += -=
       else{
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is $${myBalance}`);
        
       }
        // console.log("your remaining balance is:"+ myBalance);
        //  console.log(`your remaining balance is $${myBalance}`);        
        }
        else if(operationAns.operation === "Check balance"){
            console.log(`your remaining balance is $${myBalance}`)           
        }
        else if(operationAns.operation ==="Fast cash"){
            const fastcashOptions = [
                {name:"$500" , value:500},
                {name:"$1000" , value:1000},
                {name:"$5000" , value:5000},
                {name:"$1000" , value:1000},

            ];
            let fastcashAmount = await inquirer.prompt([
                {
                    name:"amount",
                    message:"select a Fast Cash option",
                    type:"list",
                    choices:fastcashOptions
                }]);
                fastcashAmount = fastcashAmount.amount;

            if(fastcashAmount > myBalance){
                console.log("Insufficient balance.")
            }
            else{
                myBalance -= fastcashAmount;
                console.log(`Fast cash dispensed:$${fastcashAmount}`);
                console.log(`your remaining balance is:$${myBalance}`);
                
            }
        }
        else{
            console.log("Invalide operation selcted");
            
        }

 }
 else{
    console.log("Incorrect pin number");
    
 }


