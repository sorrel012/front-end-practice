const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
  link.innerText = 'I AM A LINK!!!!';
}

document.querySelector('h1').innerText += ' version';
document.querySelector('h1').innerHTML += '<sup>2</sup>';
