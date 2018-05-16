//to get an id by querySelector use # before id
//to get a class by querySelector use . before class

//get element event occured on: ev.target

//const button = document.querySelector('button.greeting');
const form = document.querySelector('#userForm');

const handleSubmit = function(ev){
    ev.preventDefault();
    const users = document.querySelector('#users');
    const user = {
        userName: ev.target.userName.value,
        age: ev.target.age.value,
        favColor: renderColor(ev.target.favoriteColor.value),
    }

    if(user.userName == '' || user.age == ''){
        alert('Empty Field');
    }
    else{
        users.appendChild(renderList(user));
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
    
    const term = document.createElement('dt');
    term.textContent = value1;
    const description = document.createElement('dd');
    try{
        description.appendChild(value2);
    }
    catch(e){
        description.textContent += value2;
    }

    item.appendChild(term);
    item.appendChild(description);
    return item;
}

function renderList(data){
    
    const list = document.createElement('dl');
    
    const labels = Object.keys(data);
    labels.forEach((label) => {
        list.appendChild(renderListItem(label, data[label]));
    })

    return list;
}

form.addEventListener('submit', handleSubmit);
