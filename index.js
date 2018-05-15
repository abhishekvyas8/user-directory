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
    const favColor = ev.target.favoriteColor.value;
    //debugger
    if(userName == '' || age == ''){
        alert('Empty Field');
    }
    else{
        //user.innerHTML += `<p>${userName}, ${age}</p>`;
        const list = document.createElement('ul');

        const nameItem = document.createElement('li');
        nameItem.textContent = `Name: ${userName}`;
        list.appendChild(nameItem);

        const ageItem = document.createElement('li');
        ageItem.textContent = `Age: ${age}`;
        list.appendChild(ageItem);

        const favColorItem = document.createElement('li');
        favColorItem.textContent = `Favorite Color: ${favColor}`;   
        list.appendChild(favColorItem);

        user.appendChild(list);

        favColorItem.style.color = favColor;
    } 
    
    ev.target.reset();
    ev.target.userName.focus();
}

form.addEventListener('submit', changeText);
