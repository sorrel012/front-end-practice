document.querySelector('button').addEventListener('click', function (evt) {
  console.log(evt);
});

const input = document.querySelector('input');
// input.addEventListener('keydown', function (evt) {
//   console.log(evt.key);  //키보드 자판을 눌러서 생성되는 값
//   console.log(evt.code); //실제 키보드의 위치 기반 값
// });

window.addEventListener('keydown', function (evt) {
  switch (evt.code) {
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('DOWN!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!');
      break;
    default:
      console.log('IGNORED!');
  }
});
