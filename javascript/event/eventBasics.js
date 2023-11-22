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

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
  alert('DOUBLE CLICKED');
});

// btn3.addEventListener('mouseup', function () {
//   alert('MOUSE UP');
// });

function twist() {
  console.log('TWIST!');
}
function shout() {
  console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');

// 가장 나중에 선언된 이벤트만 적용됨.(여러 개 불가!)
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);
