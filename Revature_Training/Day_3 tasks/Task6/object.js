 //Create 3 student objects with properties name, age,city.
        // add those 3 objects in an array named students
        // Iterate over that array and print the name and city stored in each object.
        function student(){
            let arr=[];
            let student1={
                name:'madhu',
                age:24,
                city:'delhi'
            }
            let student2={
                name:'naveen',
                age:24,
                city:'Nlg'
            }
            let student3={
                name:'ram',
                age:20,
                city:'hyd'
            }
            arr.push(student1,student2,student3);
    
            arr.forEach(student=>{
                console.log(`Name of the student is ${student.name} and City is ${student.city}`)
            });
        }
        student();