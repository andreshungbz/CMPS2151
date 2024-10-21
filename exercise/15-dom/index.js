const h1 = document.querySelector('#title');
console.log(h1);

const a = document.querySelector('a[href="https://www.google.com"]');
console.log(a);
a.style.color = 'red';

const button = document.querySelector('.btn');
console.log(button);
button.style.backgroundColor = 'yellow';

h1.classList.toggle('invisible');
h1.classList.toggle('invisible');
console.log(h1.classList);

console.log(document);

const ul = (button.onclick = () => {
  h1.classList.toggle('huge');
});

h1.innerHTML = '<em>Goodbye!</em>';
h1.textContent = 'textContent';

a.setAttribute('href', 'https://yahoo.com');
console.log(h1.attributes);
h1.setAttribute('id', 'title-2');
