//to get an id by querySelector use # before id
//to get a class by querySelector use . before class
const button = document.querySelector('button.greeting');


function changeText(){
    const para = document.querySelector('p.greeting');
    para.textContent = 'You done clicked.';
}

button.addEventListener('click', changeText);