const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log('YOU CLICKED ME!');
  console.log('I HOPE IT WORKED!');
};

function scream() {
  console.log('AAAAHHHHH');
  console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;
