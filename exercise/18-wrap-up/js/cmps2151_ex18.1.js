/* add code after this comment */

const ul = document.getElementById('thumb-list');
console.log(ul);
ul.style.borderStyle = 'solid';
ul.style.borderColor = 'gray';
ul.style.borderWidth = '1px';

const textarea = document.querySelector('#msg');
const p = document.querySelector('p');
textarea.value = p.textContent;

const imgList = document.querySelectorAll('.thumbs');
for (const img of imgList) {
  img.classList.add('box');
}
