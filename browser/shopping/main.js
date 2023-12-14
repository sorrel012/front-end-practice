const items = document.querySelector('.items');
// const itemRow = document.querySelector('.item__row');
// const delBtn = document.querySelector('.item__delete');
const input = document.querySelector('.footer__input');
// const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  onAdd();
});
function onAdd() {
  const text = input.value;
  if (text.trim() === '') {
    input.focus();
    return;
  }

  const item = createItem(text);

  items.appendChild(item);

  item.scrollIntoView({ block: 'center', behavior: 'smooth' });

  input.value = '';
  input.focus();
}

let id = 0; // 실제로는 UUID 쓰는 것이 좋음
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.classList.add('item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `  
          <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete"'>
              <i class="fas fa-trash-alt" data-id='${id}'></i>
            </button>
          </div>
          <div class="item__divider"></div>`;
  id++;
  // const item = document.createElement('div');
  // item.classList.add('item');
  //
  // const itemName = document.createElement('span');
  // itemName.classList.add('item__name');
  // itemName.innerText = text;
  //
  // const delBtn = document.createElement('button');
  // delBtn.classList.add('item__delete');
  // delBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });
  //
  // const icon = document.createElement('i');
  // icon.classList.add('fas');
  // icon.classList.add('fa-trash-alt');
  //
  // const itemDivider = document.createElement('div');
  // itemDivider.classList.add('item__divider');
  //
  // item.appendChild(itemName);
  // delBtn.appendChild(icon);
  // item.appendChild(delBtn);
  //
  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);

  return itemRow;
}

// addBtn.addEventListener('click', () => {
//   onAdd();
// });
// input.addEventListener('keydown', (evt) => {
//   // if (evt.key === 'a') {
//   //   evt.preventDefault();
//   // }
//   if (evt.isComposing) {
//     return;
//   }
//   if (evt.key === 'Enter') {
//     onAdd();
//   }
// });

items.addEventListener('click', (evt) => {
  const id = evt.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

// delBtn.addEventListener('click', () => {
//   items.removeChild(itemRow);
// });
