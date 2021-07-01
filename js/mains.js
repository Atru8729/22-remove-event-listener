const countDOM = document.querySelector('count');
const enableDOM = document.querySelector('#enable');
const addDOM = document.querySelector('#add');
const disableDOM = document.querySelector('#disable');

let clickCount = 0;

countDOM.innerText = clickCount;

enableDOM.addEventListener('click')