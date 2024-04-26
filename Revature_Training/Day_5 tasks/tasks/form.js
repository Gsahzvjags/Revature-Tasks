let formEle=document.getElementById('form');
let arr=[];
function formData(){
    event.preventDefault();
    let userEle=document.getElementById('username');
    let passEle=document.getElementById('password');
    let emailEle=document.getElementById('email');
    
    let name=userEle.value;
    let email=emailEle.value;
    let password=passEle.value;
    // console.log(email);
    let obj={
        name:name,
        email:email,
        password:password
    }
    arr.push(obj);
    console.log(arr)

    displayNames()

    userEle.value='';
    passEle.value='',
    emailEle.value='';
    
};

function displayNames(){
    let divEle=document.getElementById('div');
    divEle.innerHTML='';
    arr.forEach((user=>{
        let paraEle=document.createElement('p');
        paraEle.textContent=user.name;
        divEle.appendChild(paraEle);
    }))
}

formEle.addEventListener('submit',formData);