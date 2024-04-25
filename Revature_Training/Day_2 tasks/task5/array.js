     // 1.Find number 2 in the following array. If 2 is present,
        // print its index in the array. If 2 is not present, display the message 
        //"Element not found in array". const arr = [1, 2, 3, 4, 5, 6];
        function find(arr){
            let x;
            for(let i in arr){
                if(arr[i]===2){
                    x=i
                }
            }
            if(x){
                return x
            }else{
                return 'number not found'
            }
        }
        console.log(find([1,2,3,4,5,6]))
    
            // 2.Remove "apple" from the following array: 
            //const fruits = ["banana", "mango", "apple", "kiwi"];
            const fruits = ["banana", "mango", "apple", "kiwi"];
            let a=fruits.splice(2,1)
            console.log(fruits)
    
            // 3.Reverse the order of the elements in the following array: 
            //const numbers = [23, 45, 12, 67, 89, 34];
            const numbers = [23, 45, 12, 67, 89, 34];
            reversedNum=[];
            for(let i=numbers.length-1;i>=0;i--){
            reversedNum.push(numbers[i])
            }
            console.log(reversedNum);
    
            // 4.Find the maximum value in the following array:
            // const numbers = [23, 45, 12, 67, 89, 34];
            const number = [23, 45, 12, 67, 89, 34];
            let maxvalue=0;
            for(let i of numbers){
            if(maxvalue<i){
                    maxvalue=i
                }
            }
            console.log(maxvalue)
    
            // 5.Create a function that takes an array of numbers and returns the 
            //second-largest number in the array: const numbers = [10, 5, 8, 20, 15, 12];
            var largestNum=()=>{
                const numbers = [10, 5, 8, 20, 15, 12];
                let arr=[];
                arr=numbers.sort()
                console.log(arr[1])
            }
            largestNum()
    
            // 6.Create a function that takes an array of numbers and returns the 
            //sum of all even numbers in the array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
            let evenNum=()=>{
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                arr=0;
                for(var i of numbers){
                    if(i%2==0){
                        arr+=i
                
                }
            }
                    console.log(arr)
        }
         evenNum()
                
         //7.Print the factorial of the number which is given by user. 
         
         function factorial(number){
            if (number<0){
                return 'factorial is not defined for negative numbers';
            }
            let result=1;
            for(let i=1;i<=number;i++){
                result*=i
            }
            return result
        }
        
        let factorial_num=parseInt(prompt('enter a number:'))
        console.log(factorial(factorial_num))
    