// console.log("BEFORE CONDITIONAL");
// let random = Math.random();
// if(random < 0.5) {
//   console.log(random, "YOUR NUMBER IS LESS THAN 0.5!");
//  } else {
//   console.log(random, "YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!");
//  }
// console.log("AFTER CONDITIONAL");

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
if(dayOfWeek === 'monday') {
  console.log('UGHHH I HATE MONDAYS!');
} else if (dayOfWeek === 'saturday') {
  console.log('YAY I LOVE SATURDAYS');
} else if (dayOfWeek === 'friday') {
  console.log('FRIDAYS ARE DECENT, ESCEPCIALLY AFTER WORK!');
} else {
  console.log('MEH');
}