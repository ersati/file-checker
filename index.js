// Import stylesheets
import './style.css';

const input = document.querySelector('input[type=file]');

console.log(input);

input.addEventListener('change', () => {
  const fileString = input.value;

  const file = input.files[0];
  const fileName = file.name;
  const fileSizeByte = file.size;
  const sizeInMB = (fileSizeByte / (1024 * 1024)).toFixed(2);
  const dot = fileString.lastIndexOf('.');
  const slash = fileString.lastIndexOf('\\');
  const format = fileString.slice(dot, fileString.length);
  const name = fileString.slice(slash, dot);

  console.log(input.files[0].type, sizeInMB);
});
