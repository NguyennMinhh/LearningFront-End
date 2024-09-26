const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit );

function onSubmit(e) {
    e.preventDefault();

    if( nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');         // 'error' is a style class in style.css
        msg.innerHTML = 'Please enter all fields';

        // SetTimeout( Function() => result, after 3000 miliseconds )
        setTimeout( () => msg.remove(), 3000) ;
    }
    else {
        
        const fli = document.createElement('li');

        fli.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(fli);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

};
