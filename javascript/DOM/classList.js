const tags = document.querySelectorAll('li');

for (let li of tags) {
  if (li.getAttribute('class') === 'highlight') {
    li.classList.remove('highlight');
  } else {
    li.classList.add('highlight');
  }
}
