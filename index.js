//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

//const button = document.querySelector('button.greeting');
const form = document.querySelector('#userForm');

const changeText = function(ev){
    ev.preventDefault();
    const user = document.querySelector('#users');
    const userName = ev.target.userName.value;
    const age = ev.target.age.value
    //debugger
    if(userName == '' || age == ''){
        alert('Empty Field');
    }
    else{
        //user.innerHTML += `<p>${userName}, ${age}</p>`;
        const p = document.createElement('p');
        p.textContent = `${userName}, ${age}`;
        user.appendChild(p);
    } 
    
    ev.target.reset();
    ev.target.userName.focus();
}

form.addEventListener('submit', changeText);
