        // Temperature Converter Program a. Take input from the user for
        // the temperature value and the scale (Celsius or Fahrenheit). 
        // b. Based on the user's input, determine whether to convert 
        // from Celsius to Fahrenheit or from Fahrenheit to Celsius. 
        // c. Use arrow functions to perform the conversion.
        // (Create two separate arrow functions: one for converting Celsius to Fahrenheit,
        // and another for converting Fahrenheit to Celsius. Pass the temperature value to
        //  the appropriate function from your main function and return the converted value.)
        // d. Display the converted temperature value to the user.
        let celsius = (number) =>   ((number * 9/5) + 32);
        let fahrenheit = (number) => ((number - 32) * 5/9)
        let result;
        let temperature=()=>{
        let temp=prompt("Enter which one you are giving as input 'Celsius' or 'Fahrenheit'")
        let num1=parseFloat(prompt('enter a number'))
        if(temp==='Celsius'){
         result=celsius(num1)
         alert(`The result is ${result}`)
        }else if(temp==='Fahrenheit'){
            result=fahrenheit(num1)
            alert(`The result is ${result}`)
        }else{
            alert('Invalid operation')
        }

    }
temperature();
console.log("Result is", result);
