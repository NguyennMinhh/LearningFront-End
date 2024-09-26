// console.log( document.getElementById('my-form') );
// console.log( document.querySelector('h1') );
// console.log( document.querySelector('.container'));
// console.log( document.querySelectorAll('.item') );

const ul = document.querySelector('.items');
ul.lastElementChild.remove(); // remove last <li>

// Change element childs of the query
// ul.firstElementChild.textContent = 'Item 1 has been changed!';
ul.children[1].innerHTML = '<h2> Item 2 has been changed! </h2>';

// change color of button 
const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.btn')
    .style.background = 'red';
    ul.children[0].innerHTML = '<h2> Submitted </h2>';
});