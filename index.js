//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

const button = document.querySelector('button.greeting');
const head1 = document.querySelector('#head2');

let val = 0;

function changeText(){
    val++;
    if(val > 2){
        val = 1;
    }
     
    if(val == 1){
        head1.textContent = 'Changed'; 
    }
    else if(val == 2){
        head1.textContent = 'Header 2'; 
    }
    
}

button.addEventListener('click', changeText);