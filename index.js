//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

//const button = document.querySelector('button.greeting');

const head = document.querySelector('h1');
const form = document.querySelector('#userForm');


const changeText = function(ev){
    ev.preventDefault();
    const input = ev.target.text1.value;
    //debugger
    if(input == ''){
        alert('Enter Something');
    }
    else{
        head.textContent = input;
    }  
}

form.addEventListener('submit', changeText);
