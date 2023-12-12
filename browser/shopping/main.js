const items = document.querySelector('.items');
const itemRow = document.querySelector('.item__row');
const delBtn = document.querySelector('.item__delete');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', () => {
  onAdd();
});

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.classList.add('item__row');

  const item = document.createElement('div');
  item.classList.add('item');

  const itemName = document.createElement('span');
  itemName.classList.add('item__name');
  itemName.innerText = text;

  const delBtn = document.createElement('button');
  delBtn.classList.add('item__delete');
  delBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const icon = document.createElement('i');
  icon.classList.add('fas');
  icon.classList.add('fa-trash-alt');

  const itemDivider = document.createElement('div');
  itemDivider.classList.add('item__divider');

  item.appendChild(itemName);
  delBtn.appendChild(icon);
  item.appendChild(delBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

delBtn.addEventListener('click', () => {
  items.removeChild(itemRow);
});
