//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

//const button = document.querySelector('button.greeting');
const form = document.querySelector('#userForm');


const changeText = function(ev){
    ev.preventDefault();
    const user = document.querySelector('#users');
    const input = ev.target.userName.value;
    //debugger
    if(input == ''){
        alert('Enter Something');
    }
    else{
        user.textContent += input + ' ';
    } 
    ev.target.userName.value = ''; 
}

form.addEventListener('submit', changeText);
