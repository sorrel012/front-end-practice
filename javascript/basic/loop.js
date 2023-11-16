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

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}