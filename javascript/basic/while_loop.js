// let count = 0;
// while(count < 10) {
//   console.log(++count);
// }

// const SECRET = 'BabyHippo';
// let guess = prompt('enter the secret code...');
// while ( guess !== SECRET) {
//   guess = prompt('enter the secret code...');
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

let input = prompt('Hey, say something!');
while (true) {
  input = prompt(input);
  if (input.toLocaleLowerCase() === 'stop copying me') {
    break;
  }
}
console.log('OK YOU WIN!');