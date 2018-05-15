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
        const list = document.createElement('ul');

        list.appendChild(renderListItem('Name', userName));
        list.appendChild(renderListItem('Age', age));
        list.appendChild(renderListItem('Favorite Color', favColor).appendChild(renderColor(favColor)));

        user.appendChild(list);
    } 
    
    ev.target.reset();
    ev.target.userName.focus();
}

function renderColor(favColor){
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favColor;
    colorDiv.style.height = '3rem';
    colorDiv.style.width = '6rem';
    return colorDiv;
}

function renderListItem(value1, value2){
    const item = document.createElement('li');
    if(value1 != 'Favortie Color'){   
        item.textContent = `${value1}: ${value2}`;
    }
    else{
        item.textContent = `${value1}`
    }
    return item;
}

form.addEventListener('submit', changeText);
