const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//   link.innerText = 'I AM A LINK!!!!';
// }

document.querySelector('h1').innerText += ' version';
document.querySelector('h1').innerHTML += '<sup>2</sup>';

const firstLink = document.querySelector('a');
const link1 = firstLink.href;
const link2 = firstLink.getAttribute('href');
console.log(link1);
console.log(link2);

firstLink.setAttribute('href', 'https://www.google.com');

// CSS

// document.querySelector('h1').style.color = 'pink';

for (let link of allLinks) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecoration = 'none';
  link.style.fontWeight = 'bold';
}
