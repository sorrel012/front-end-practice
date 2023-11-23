const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const newLI = document.createElement('li');
  newLI.innerText = input.value;
  list.append(newLI);
  input.value = '';
});
