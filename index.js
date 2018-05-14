//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

const button = document.querySelector('button.greeting');


function changeText(ev){
    ev.target.textContent = 'Click Click';
}

button.addEventListener('click', changeText);