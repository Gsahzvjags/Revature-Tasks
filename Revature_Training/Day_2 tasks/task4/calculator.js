        // Calculator programme. a. Take input from user which operation he 
        // wants to perform. ("sum", "sub", "mul", "div") b. based on his input 
        // take the next 2 numbers. c. to perform the operation use arrow function. 
        // (for sum operation create a sum arrow function and pass 2 values to 
        // it form your main function and return the sum to your 
        // main function. and then console log it.)
       
        let sum=(a,b)=>a+b;
        let minus=(a,b)=>a-b;
        let mul=(a,b)=>a*b;
        let div=(a,b)=>a/b;
        let result;
        let calculator=()=>{
            let operation=prompt('Enter the operation');
            let num1=parseFloat(prompt('Enter the first number'));
            let num2=parseFloat(prompt('enter the second number'));
        if(operation==='sum'){
            result=sum(num1,num2);
            alert(`the result is ${result}`);
        } else if(operation==='minus'){
            result=minus(num1,num2);
            alert(`the result is ${result}`); 
        }else if(operation==='mul'){
            result=mul(num1,num2);
            alert(`the result is ${result}`);
        }else if(operation==='div'){
            result=div(num1,num2);
            alert(`the result is ${result}`);
        }else{
            alert('invalid operation');
        }
        };
    calculator();
    console.log("Result is", result);