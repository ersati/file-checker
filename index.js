// Import stylesheets
import './style.css';

const input = document.querySelector('input[type=file]');
const div = document.createElement('div');
const firstP = document.createElement('p');
const secondP = document.createElement('p');
const thirdP = document.createElement('p');
const body = document.querySelector('body');
const btn = document.querySelector('.button');

div.setAttribute('class', 'last');
body.appendChild(div);
div.appendChild(firstP, secondP, thirdP);
div.appendChild(secondP);
div.appendChild(thirdP);

input.addEventListener('change', () => {
  const file = input.files[0];
  const fileName = file.name;
  const fileSizeByte = file.size;
  const sizeInMB = (fileSizeByte / (1024 * 1024)).toFixed(2);
  const dot = fileName.lastIndexOf('.');
  const format = fileName.slice(dot + 1, fileName.length);

  firstP.textContent = `Name of File: ${fileName}`;
  secondP.textContent = `Size of File ${sizeInMB}MB`;
  thirdP.textContent = `Format of File: ${format}`;
});

btn.addEventListener('click', () => {
  input.value = null;
  firstP.textContent = ``;
  secondP.textContent = ``;
  thirdP.textContent = ``;
});
