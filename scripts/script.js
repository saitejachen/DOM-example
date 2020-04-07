const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderStyle = 'solid';
div.style.borderWidth = '5px';
div.style.borderColor = 'black';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

const p = document.createElement('p');
p.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p);

container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(div);