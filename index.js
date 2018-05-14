//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

const button = document.querySelector('button.greeting');

const head = document.querySelector('#head1');


function changeText(){
    const input = document.querySelector('#text1').value;
    if(input == ''){
        alert('type something');
    }
    else{
        head.textContent = input;
    }   
}

button.addEventListener('click', changeText);