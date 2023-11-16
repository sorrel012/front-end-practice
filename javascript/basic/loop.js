// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for(let i = 0; i < 21; i+= 2){
//   console.log(i);
// }

// for (let i = 0; i > 0; i++) {
//   console.log(i);
// }

// const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is : ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`j is : ${j}`);
//   }
// }

const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Keving' ],
  ['Ynma', 'Sakura', 'Jack', "Erika"]
];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// 

// for (let row of seatingChart) {
//   for(let student of row) {
//     console.log(student);
//   }
// }

const subreddits = ['cringe', 'books', 'funny'];

// for(let sub of subreddits) {
//   console.log(sub);
// }

// for (let char of 'hello word') {
//   console.log(char);
// }

const numbers = [1,2,3,4,5,6,7,8,9]; 

// for (let number of numbers) {
//     console.log(number**2);
// }

const testScores = {
  a: 80,
  b: 70,
  c: 100
};

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

const animals = ['rabbit', 'tiger', 'lion'];

for (const animal of animals) {
  console.log(animal);
}