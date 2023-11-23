const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (evt) {
  container.style.backgroundColor = makeRandColor();
  evt.stopPropagation();
});
container.addEventListener('click', () => {
  container.classList.add('hide');
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
