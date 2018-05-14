//to get an id by querySelector use # before id
//to get a class by querySelector use . before class
const button = document.querySelector('button.greeting');

function changeText(){
    alert('yeah');
}

button.addEventListener('click', changeText);